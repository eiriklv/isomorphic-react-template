'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const routes = require('./routes.jsx');
const Html = require('./components/Html.jsx');

const Stores = require('./stores');
const Actions = require('./actions');

const getContext = require('./context');

module.exports = function(req, res, next) {
  Router.run(routes, req.url, function(Handler, routerState) {
    let initialContext = getContext(req, routerState);
    let StoreInstances = Stores(initialContext);
    let ActionInstances = Actions(StoreInstances);

    let title = DocumentTitle.rewind();

    let markup = React.renderToString(
      <Handler
        Route={routerState}
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

    res.send('<!DOCTYPE html>' + html);
  });
};
