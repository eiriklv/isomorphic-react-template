/* global document */
'use strict';

const React  = require('react');
const Router = require('react-router');
const routes = require('./routes.jsx');

var PlacesStore = require('./stores/places-store.js');
var UserStore = require('./stores/user-store.js');

document.addEventListener('DOMContentLoaded', function(event) {
  Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    let initialContext = window.__initialContext || {};

    React.render(
      <Handler
        Stores={{
          Places: PlacesStore(initialContext.places),
          User: UserStore(initialContext.user)
        }}
      />,
      document.body
    );
  });
});
