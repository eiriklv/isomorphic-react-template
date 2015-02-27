'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const NotFound = require('./NotFound.jsx');
const Loading = require('./Loading.jsx');
const ErrorComponent = require('./Error.jsx');

const TransitionMixin = {
  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to PlaceDetails');
      if (!transition.context.shouldUpdate) return done();
      
      transition.context.Actions.PopulateSelectedPlaceData({
        params: params,
        query: query
      }, done);
    }
  }
};

const PlaceDetails = React.createClass({
  mixins: [TransitionMixin],

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

  handleClick: function() {
    this.context.Flux.Actions.RemovePlace(this.props.State.PlaceDetails.id);
  },

  render: function() {
    let State = this.props.State;

    if (State.PlaceDetails.isLoading) return <Loading />;

    return (
      <DocumentTitle title={State.PlaceDetails.name}>
        <div className='place'>
          <h2 onClick={this.handleClick}>{State.PlaceDetails.name}</h2>
          <img src={'/images/' + State.PlaceDetails.id + '.jpg'}/>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = PlaceDetails;
