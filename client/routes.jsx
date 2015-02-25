'use strict';

const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

const App = require('../components/App.jsx');
const Places = require('../components/Places.jsx');
const Landing = require('../components/Landing.jsx');
const Index = require('../components/Index.jsx');
const PlaceDetails = require('../components/PlaceDetails.jsx');
const NotFound = require('../components/NotFound.jsx');

const routes = (
  <Route name='app' handler={App}>
    <Route name='landing' path='/' handler={Landing} />
    <Route name='places' path='/places' handler={Places}>
      <DefaultRoute name='index' handler={Index} />
      <Route name='place-details' path='/places/:id' handler={PlaceDetails} />
      <NotFoundRoute name='notfound' handler={NotFound} />
    </Route>
  </Route>
);

module.exports = routes;
