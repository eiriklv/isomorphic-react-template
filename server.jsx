'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const routes = require('./routes.jsx');
const Html = require('./components/Html.jsx');

const Stores = require('./stores');
const Actions = require('./actions');

module.exports = function(req, res, next, initialContext) {
  initialContext = initialContext || {};
  
  let title = DocumentTitle.rewind();

  let StoreInstances = Stores(initialContext);
  let ActionInstances = Actions(StoreInstances);

  Router.run(routes, req.url, function(Handler, state) {
    let renderedApp = <Handler
      Stores={StoreInstances}
      Actions={ActionInstances}
    />;

    let markup = React.renderToString(renderedApp);
    
    let html = React.renderToStaticMarkup(<Html
      title={title}
      markup={markup}
      __initialContext={initialContext}
    />);

    res.send('<!DOCTYPE html>' + html);
  });
};
