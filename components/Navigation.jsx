'use strict';

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const Navigation = React.createClass({
  contextTypes: {
    Actions: React.PropTypes.shape({
      AddPlace: React.PropTypes.function
    })
  },

  propTypes: {
    State: React.PropTypes.shape({
      Places: React.PropTypes.shape({
        isLoading: React.PropTypes.boolean,
        error: React.PropTypes.object,
        data: React.PropTypes.array
      }),
      App: React.PropTypes.shape({
        data: React.PropTypes.object,
        error: React.PropTypes.object,
        isLoading: React.PropTypes.boolean
      })
    })
  },

  addNewPlace: function() {
    this.context.Actions.AddPlace({
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
    let links = this.mapLinks(State.Places.data);
    let isLoading = State.Places.isLoading;

    return (
      <div className='navigation'>
        <h1>{State.App.data.title}</h1>
        <h3 onClick={this.addNewPlace}>Hello {State.User.data.fullname}!</h3>
        <ul className='master'>
          {links}
          {isLoading ? <p>Loading..</p> : null}
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
