'use strict';

const debug = require('debug')('app:server-render');
const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const routes = require('./routes.jsx');
const Html = require('./components/Html.jsx');

const Stores = require('./stores');
const Actions = require('./actions');

const api = require('./api');
const fetchInitialContext = require('./fetch-context')(api);

const renderApp = function(req, callback) {
  fetchInitialContext(req, function(err, initialContext) {
    if (err) return callback(err);

    let StoreInstances = Stores(initialContext);

    let RouterInstance = Router.create({
      routes: routes,
      location: req.url,
      transitionContext: {
        Stores: StoreInstances
      },
      onAbort: function(redirect) {
        callback({ redirect: redirect });
      },
      onError: function(err) {
        callback(err);
      }
    });

    let ActionInstances = Actions(StoreInstances, RouterInstance, api);

    RouterInstance.run(function(Handler, routerState) {
      let title = DocumentTitle.rewind();

      let markup = React.renderToString(
        <Handler
          Router={RouterInstance}
          RouterState={routerState}
          Stores={StoreInstances}
          Actions={ActionInstances}
        />
      );

      let html = React.renderToStaticMarkup(
        <Html
          title={title}
          markup={markup}
          __initialContext={initialContext}
        />
      );

      callback(null, '<!DOCTYPE html>' + html)
    });
  });
}

module.exports = function(req, res, next) {
  renderApp(req, function(err, html) {
    if (err && err.notFound) return res.status(404).send(html);
    if (err && err.redirect) return res.redirect(303, err.redirect.to);
    if (err) return next(err);

    res.send(html);
  })
};
