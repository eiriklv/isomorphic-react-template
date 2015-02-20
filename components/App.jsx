'use strict';

const React = require('react');
const ReactAsync = require('react-async');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const RouteHandler = Router.RouteHandler;
const Link = Router.Link;

const title = 'Some places in Italy';

const App = React.createClass({
  propTypes: {
    Stores: React.PropTypes.shape({
      Places: React.PropTypes.object,
      User: React.PropTypes.object
    })
  },

  getInitialState: function() {
    return {
      places: this.props.Stores.Places.getPlaces(),
      user: this.props.Stores.User.getUserData()
    }
  },

  render: function() {
    let links = this.state.places.map(function(place) {
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
          <h3>Hello {this.state.user.fullname}!</h3>
          <ul className='master'>
            {links}
            <Link to='index'>
              <small>(back to index)</small>
            </Link>
          </ul>
          <div className='detail'>
            <RouteHandler places={this.state.places} />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;
