'use strict';

const React = require('react');
const ReactAsync = require('react-async');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const routes = require('./routes.jsx');
const Html = require('./components/Html.jsx');

module.exports = function(req, res, next, context) {
  Router.run(routes, req.url, function(Handler, state) {

    context = context || {}
    let title = DocumentTitle.rewind();
    let renderedApp = React.createElement(Handler, context);

    ReactAsync.renderToStringAsync(renderedApp, function(err, markup, data) {
      if (!markup) return next(err);
      
      let html = React.renderToStaticMarkup(
        <Html
          title={title}
          markup={ReactAsync.injectIntoMarkup(markup, data)}
        />
      );

      res.send('<!DOCTYPE html>' + html);
    });
  });
};
