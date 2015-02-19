'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var data = require('../public/data/places');
var title = 'Some places in Italy';

var App = React.createClass({
  mixins: [ReactAsync.Mixin],

  getDefaultProps: function() {
    return {
      places: data
    }
  },

  getInitialStateAsync: function(callback) {
    setTimeout(
      callback.bind(
        null,
        null,
        {
          text: 'hello world'
        }
      ),
      500
    );
  },

  render: function() {
    var links = this.props.places.map(function(place) {
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
          <h3>{this.state.text}</h3>
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
