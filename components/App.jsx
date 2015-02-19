'use strict';

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var ServerStateMixin = require('../mixins/server-state');
var title = 'Some places in Italy';

var App = React.createClass({

  mixins: [ServerStateMixin],

  getServerState: function(state) {
    return {
      places: state.data
    }
  },

  render: function() {
    var links = this.state.places.map(function(place) {
      return (
        <li key={'place-' + place.id}>
          <Link to='place' params={{ id: place.id }}>
            {place.name}
          </Link>
        </li>
      );
    }.bind(this));

    return (
      <DocumentTitle title={title}>
        <div className='app'>
          <h1>{title}</h1>
          <ul className='master'>
            {links}
            <Link to='index'>
              <small>(back to index)</small>
            </Link>
          </ul>
          <div className='detail'>
            <RouteHandler />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;
