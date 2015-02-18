/* global document */
'use strict';

var React  = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

document.addEventListener('DOMContentLoaded', function(event) {
  Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    var serverState = window.__serverState || {};
    React.render(<Handler __serverState={serverState} />, document.body);
  });
});
