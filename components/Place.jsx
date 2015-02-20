'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const NotFound = require('./NotFound.jsx');

const Place = React.createClass({
  mixins: [Router.State],

  propTypes: {
    places: React.PropTypes.array
  },

  render: function() {
    let place = this.props.places.filter(function(place) {
      return place.id === this.getParams().id;
    }.bind(this))[0];

    if (!place) {
      return <NotFound />;
    }

    return (
      <DocumentTitle title={place.name}>
        <div className='place'>
          <h2>{place.name}</h2>
          <img src={'/images/' + place.id + '.jpg'}/>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Place;
