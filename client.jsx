/* global document */
'use strict';

const React  = require('react');
const Router = require('react-router');
const routes = require('./routes.jsx');

const Flux = require('fluxomorph');

const Stores = require('./stores');
const Actions = require('./actions');

const api = require('./api');

document.addEventListener('DOMContentLoaded', function(event) {
  let initialContext = window.__initialContext || {};

  let flux = Flux({
    Stores: Stores,
    Actions: Actions
  });

  flux.rehydrate(initialContext);
  
  let RouterInstance = Router.create({
    routes: routes,
    location: Router.HistoryLocation,
    transitionContext: flux.getContext()
  });

  flux.addToContext('Router', RouterInstance);
  flux.addToContext('Api', api);

  RouterInstance.run(function(Handler, routerState) {    
    React.render(
      <Handler
        Flux={flux.getContext()}
        RouterState={routerState}
      />,
      document.body
    );
  });
});
