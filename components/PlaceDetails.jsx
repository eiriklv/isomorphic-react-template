'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const NotFound = require('./NotFound.jsx');
const Loading = require('./Loading.jsx');

const PlaceDetails = React.createClass({
  contextTypes: {
    RouterState: React.PropTypes.object,
    Flux: React.PropTypes.shape({
      Actions: React.PropTypes.shape({
        RemovePlace: React.PropTypes.function
      })
    })
  },

  propTypes: {
    State: React.PropTypes.shape({
      PlaceDetails: React.PropTypes.object
    })
  },

  statics: {
    willTransitionTo: function(transition, params, query, done) {
      if (!transition.context.shouldUpdate) return done();
      
      transition.context.Actions.PopulateSelectedPlaceData({
        params: params,
        query: query
      }, done);
    }
  },

  render: function() {
    let State = this.props.State;

    if (State.PlaceDetails.isLoading) return <Loading />;

    return (
      <DocumentTitle title={State.PlaceDetails.name}>
        <div className='place'>
          <h2>{State.PlaceDetails.name}</h2>
          <img src={'/images/' + State.PlaceDetails.id + '.jpg'}/>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = PlaceDetails;
