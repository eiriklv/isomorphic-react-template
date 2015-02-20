'use strict';

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const App = React.createClass({
  propTypes: {
    Data: React.PropTypes.shape({
      places: React.PropTypes.array,
      title: React.PropTypes.string
    }),
    Actions: React.PropTypes.shape({
      AddPlace: React.PropTypes.function,
      RemovePlace: React.PropTypes.function
    })
  },

  addNewPlace: function() {
    this.props.Actions.AddPlace({
      'id': 'sunndal',
      'name': 'Sunndalsora (Norge)'
    });
  },

  render: function() {
    var data = this.props.Data;

    let links = data.places.map(function(place) {
      return (
        <li key={'place-' + place.id}>
          <Link to='place' params={{ id: place.id }}>
            {place.name}
          </Link>
        </li>
      );
    }.bind(this));

    return (
      <div className='navigation'>
        <h1>{data.title}</h1>
        <h3 onClick={this.addNewPlace}>Hello {data.user.fullname}!</h3>
        <ul className='master'>
          {links}
          <Link to='index'>
            <small>(back to index)</small>
          </Link>
        </ul>
      </div>
    );
  }
});

module.exports = App;
