'use strict';

const React = require('react');
const ReactAsync = require('react-async');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const RouteHandler = Router.RouteHandler;
const Link = Router.Link;

const data = require('../public/data/places');
const title = 'Some places in Italy';

const inline = require('fs').readFileSync(__dirname + '/../package.json', 'utf8');
console.log(inline);

const App = React.createClass({
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
    let links = this.props.places.map(function(place) {
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
