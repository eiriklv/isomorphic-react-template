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
