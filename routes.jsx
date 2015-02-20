'use strict';

const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

/* Components */
const App = require('./components/App.jsx');
const Index = require('./components/Index.jsx');
const Place = require('./components/Place.jsx');
const NotFound = require('./components/NotFound.jsx');

const routes = (
  <Route name='places' path='/' handler={App}>
    <DefaultRoute name='index' handler={Index} />
    <Route name='place' path='place/:id' handler={Place} />
    <NotFoundRoute name='notfound' handler={NotFound} />
  </Route>
);

module.exports = routes;
