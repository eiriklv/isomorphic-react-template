'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var routes = require('./routes.jsx');
var Html = require('./components/Html.jsx');

module.exports = function(req, res, next, context) {
  Router.run(routes, req.url, function(Handler, state) {

    context = context || {}
    var title = DocumentTitle.rewind();
    var renderedApp = React.createElement(Handler, context);

    ReactAsync.renderToStringAsync(renderedApp, function(err, markup, data) {
      if (!markup) return next(err);
      
      var html = React.renderToStaticMarkup(
        <Html
          title={title}
          markup={ReactAsync.injectIntoMarkup(markup, data)}
        />
      );

      res.send('<!DOCTYPE html>' + html);
    });
  });
};
