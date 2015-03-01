'use strict';

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const Navigation = React.createClass({
  contextTypes: {
    Flux: React.PropTypes.object.isRequired,
    RouterState: React.PropTypes.object.isRequired
  },

  propTypes: {
    State: React.PropTypes.shape({
      Places: React.PropTypes.any.isRequired,
      App: React.PropTypes.any.isRequired
    })
  },

  attemptLogout: function(e) {
    e.preventDefault();

    this.context.Flux.Actions.AttemptLogout();
  },

  mapLinks: function(places) {
    return places.map(function(place) {
      return (
        <li key={'place-' + place._id}>
          <Link to='place-details' params={{ id: place._id }}>
            {place.name}
          </Link>
        </li>
      );
    }.bind(this));
  },

  render: function() {
    let State = this.props.State;
    let links = this.mapLinks(State.Places.data);

    return (
      <div className='navigation'>
        <h1>{State.App.title}</h1>
        <ul className='master'>
          {links}
          <Link to='index'>
            <small>(back to index)</small>
          </Link>
          <br />
          <Link to='landing'>
            <small>(landing)</small>
          </Link>
          <br />
          <a href='#' onClick={this.attemptLogout}>
            <small>(log out)</small>
          </a>
        </ul>
      </div>
    );
  }
});

module.exports = Navigation;
