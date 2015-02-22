'use strict';

const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

/* Components */
const TopComponent = require('./components/TopComponent.jsx');
const App = require('./components/App.jsx');
const Landing = require('./components/Landing.jsx');
const Index = require('./components/Index.jsx');
const Place = require('./components/Place.jsx');
const NotFound = require('./components/NotFound.jsx');

const routes = (
  <Route name='app' handler={TopComponent}>
    <Route name='landing' path='/' handler={Landing} />
    <Route name='places' path='/places' handler={App}>
      <DefaultRoute name='index' handler={Index} />
      <Route name='place' path='/places/:id' handler={Place} />
      <NotFoundRoute name='notfound' handler={NotFound} />
    </Route>
  </Route>
);

module.exports = routes;
