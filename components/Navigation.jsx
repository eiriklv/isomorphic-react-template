'use strict';

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const Navigation = React.createClass({
  contextTypes: {
    Flux: React.PropTypes.shape({
      Actions: React.PropTypes.shape({
        addPlace: React.PropTypes.function
      })
    })
  },

  propTypes: {
    State: React.PropTypes.shape({
      Places: React.PropTypes.any,
      App: React.PropTypes.any
    })
  },

  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to Navigation');
      done();
    }
  },

  addNewPlace: function() {
    this.context.Flux.Actions.AddPlace({
      'id': 'sunndal',
      'name': 'Sunndalsora (Norge)'
    });
  },

  mapLinks: function(places) {
    return places.map(function(place) {
      return (
        <li key={'place-' + place.id}>
          <Link to='place' params={{ id: place.id }}>
            {place.name}
          </Link>
        </li>
      );
    }.bind(this));
  },

  render: function() {
    let State = this.props.State;
    let links = this.mapLinks(State.Places);

    return (
      <div className='navigation'>
        <h1>{State.App.title}</h1>
        <h3 onClick={this.addNewPlace}>Hello {State.User.fullname}!</h3>
        <ul className='master'>
          {links}
          <Link to='index'>
            <small>(back to index)</small>
          </Link>
          <Link to='landing'>
            <small>(landing)</small>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = Navigation;
