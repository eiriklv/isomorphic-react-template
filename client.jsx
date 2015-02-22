/* global document */
'use strict';

const React  = require('react');
const Router = require('react-router');
const routes = require('./routes.jsx');

const Stores = require('./stores');
const Actions = require('./actions');

document.addEventListener('DOMContentLoaded', function(event) {
  let initialContext = window.__initialContext || {};
  let StoreInstances = Stores(initialContext);
  let ActionInstances = Actions(StoreInstances);

  Router.run(routes, Router.HistoryLocation, function(Handler, routerState) {
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
