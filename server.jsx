'use strict';

const debug = require('debug')('app:server-render');
const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const routes = require('./routes.jsx');
const Html = require('./components/Html.jsx');

const Flux = require('fluxomorph');
const Stores = require('./stores');
const Actions = require('./actions');
const Api = require('./api');

const renderApp = function(req, callback) {
  let flux = Flux({
    Stores: Stores,
    Actions: Actions
  });

  let RouterInstance = Router.create({
    routes: routes,
    location: req.url,
    transitionContext: flux.getContext(),
    onAbort: function(redirect) {
      callback({ redirect: redirect });
    },
    onError: function(err) {
      callback(err);
    }
  });

  flux.addToContext('Router', RouterInstance);
  flux.addToContext('Api', Api);

  RouterInstance.run(function(Handler, routerState) {
    let title = DocumentTitle.rewind();

    // all handlers have declared their data
    // needs in statics.willTransitionTo
    // - where they can call actions (async - by having action accept a optional done-callback)
    // - where they can rehydrate on the client if applicable
    // - this would also enable you to turn isomorphism on/off without big impact
    let markup = React.renderToString(
      <Handler
        Flux={flux.getContext()}
        RouterState={routerState}
      />
    );

    // here out stores have been filled with data
    // using actions and the api
    // - this means that we are ready to
    // dehydrate and pass this as context
    // to the client
    let html = React.renderToStaticMarkup(
      <Html
        title={title}
        markup={markup}
        __initialContext={flux.dehydrate()}
      />
    );

    callback(null, '<!DOCTYPE html>' + html)
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
