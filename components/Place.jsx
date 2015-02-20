'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const NotFound = require('./NotFound.jsx');

const Place = React.createClass({
  mixins: [Router.State],

  propTypes: {
    Data: React.PropTypes.shape({
      places: React.PropTypes.array
    }),
    Actions: React.PropTypes.shape({
      RemovePlace: React.PropTypes.function
    })
  },

  handleClick: function() {
    this.props.Actions.RemovePlace(this.getParams().id);
  },

  render: function() {
    let places = this.props.Data.places;

    let place = places.filter(function(place) {
      return place.id === this.getParams().id;
    }.bind(this))[0];

    if (!place) {
      return <NotFound />;
    }

    return (
      <DocumentTitle title={place.name}>
        <div className='place'>
          <h2 onClick={this.handleClick}>{place.name}</h2>
          <img src={'/images/' + place.id + '.jpg'}/>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Place;
