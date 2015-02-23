'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const NotFound = require('./NotFound.jsx');
const Loading = require('./Loading.jsx');
const ErrorComponent = require('./Error.jsx');

const Place = React.createClass({
  contextTypes: {
    RouterState: React.PropTypes.object,
    Actions: React.PropTypes.shape({
      RemovePlace: React.PropTypes.function
    })
  },

  propTypes: {
    State: React.PropTypes.shape({
      Places: React.PropTypes.shape({
        isLoading: React.PropTypes.boolean,
        error: React.PropTypes.object,
        data: React.PropTypes.array
      })
    })
  },

  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to Place');
      done();
    }
  },

  handleClick: function() {
    this.context.Actions.RemovePlace(this.context.RouterState.params.id);
  },

  getPlace: function(places, id) {
    return places.filter(function(place) {
      return place.id === id;
    }.bind(this))[0];
  },

  render: function() {
    let State = this.props.State;

    if (State.Places.error) return <ErrorComponent error={error} />;
    if (State.Places.isLoading) return <Loading />;

    let place = this.getPlace(
      State.Places.data,
      this.context.RouterState.params.id
    );

    if (!place) return <NotFound />;

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
