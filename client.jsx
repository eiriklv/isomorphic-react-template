/* global document */
'use strict';

const React  = require('react');
const Router = require('react-router');
const routes = require('./routes.jsx');

const Flux = require('fluxomorph');
const stores = require('./stores');
const actions = require('./actions');

const api = require('./api');

document.addEventListener('DOMContentLoaded', function(event) {
  let initialContext = window.__initialContext || {};

  let flux = Flux({
    Stores: stores,
    Actions: actions
  });

  flux.rehydrate(initialContext);
  flux.enableUpdates(false);

  // - now the stores have the same data
  // as when they left the server
  // - should have a boolean saying that the rehydration
  // has been completed, and that for the next route change
  // the data should be fetched fresh, like on the server
  // - now they are fetched fresh even if the data
  // is already there by rehydration
  // - should hide this implementation detail somewhere
  // the user does not have to care about
  
  let router = Router.create({
    routes: routes,
    location: Router.HistoryLocation,
    transitionContext: flux.getContext()
  });

  flux.addToContext('Router', router);
  flux.addToContext('Api', api);

  router.run(function(Handler, routerState) {
    flux.enableUpdates(true);

    React.render(
      <Handler
        Flux={flux.getContext()}
        RouterState={routerState}
      />,
      document.body
    );
  });
});
