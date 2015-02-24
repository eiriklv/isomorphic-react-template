/* global document */
'use strict';

const React  = require('react');
const Router = require('react-router');
const routes = require('./routes.jsx');

const Stores = require('./stores');
const Actions = require('./actions');

const api = require('./api');

document.addEventListener('DOMContentLoaded', function(event) {
  let initialContext = window.__initialContext || {};

  // flux.rehydrate(window.__initialContext)
  // - now the stores have the same data
  // as when they left the server
  // - will need to pass the context to
  // the router, or have the router in 
  // the context (?) - think of an elegant solution for this
  // - should have a boolean saying that the rehydration
  // has been completed, and that for the next route change
  // the data should be fetched fresh, like on the server

  let StoreInstances = Stores(initialContext);
  
  let RouterInstance = Router.create({
    routes: routes,
    location: Router.HistoryLocation,
    transitionContext: {
      Stores: StoreInstances
    }
  });

  let ActionInstances = Actions(StoreInstances, RouterInstance, api);

  RouterInstance.run(function(Handler, routerState) {    
    React.render(
      <Handler
        Router={RouterInstance}
        RouterState={routerState}
        Stores={StoreInstances}
        Actions={ActionInstances}
      />,
      document.body
    );
  });
});
