/* global document */
'use strict';

const React  = require('react');
const Router = require('react-router');
const routes = require('./routes.jsx');

var PlacesStore = require('./stores/places-store.js');
var UserStore = require('./stores/user-store.js');

var RemovePlaceAction = require('./actions/remove-place');
var AddPlaceAction = require('./actions/add-place');

document.addEventListener('DOMContentLoaded', function(event) {
  let initialContext = window.__initialContext || {};

  let Stores = {
    Places: PlacesStore(initialContext.places),
    User: UserStore(initialContext.user)
  };

  let Actions = {
    RemovePlace: RemovePlaceAction(Stores),
    AddPlace: AddPlaceAction(Stores)
  };

  Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    React.render(
      <Handler
        Stores={Stores}
        Actions={Actions}
      />,
      document.body
    );
  });
});
