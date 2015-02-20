/* global document */
'use strict';

const React  = require('react');
const Router = require('react-router');
const routes = require('./routes.jsx');

document.addEventListener('DOMContentLoaded', function(event) {
  Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    React.render(<Handler />, document.body);
  });
});
