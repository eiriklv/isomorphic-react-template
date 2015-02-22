/* global document */
'use strict';

const React  = require('react');
const Router = require('react-router');
const routes = require('./routes.jsx');

const Stores = require('./stores');
const Actions = require('./actions');

document.addEventListener('DOMContentLoaded', function(event) {
  let router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
  });

  let initialContext = window.__initialContext || {};
  let StoreInstances = Stores(initialContext);

  router.run(function(Handler, routerState) {
    let ActionInstances = Actions(StoreInstances, router);
    
    React.render(
      <Handler
        Route={routerState}
        Stores={StoreInstances}
        Actions={ActionInstances}
      />,
      document.body
    );
  });
});
