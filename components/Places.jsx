'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const RouteHandler = Router.RouteHandler;
const Navigation = require('./Navigation.jsx');

const TransitionMixin = {
  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to Places');
      if (!transition.context.shouldUpdate) return done();
      
      transition.context.Actions.PopulatePlacesData({
        params: params,
        query: query
      }, done);
    }
  }
};

const Places = React.createClass({
  mixins: [TransitionMixin],

  contextTypes: {
    Flux: React.PropTypes.object.isRequired,
    RouterState: React.PropTypes.object.isRequired
  },

  propTypes: {
    State: React.PropTypes.shape({
      App: React.PropTypes.any,
      Alerts: React.PropTypes.any,
      Places: React.PropTypes.any,
      User: React.PropTypes.any
    })
  },

  render: function() {
    let State = this.props.State;

    return (
      <DocumentTitle title={State.App.title}>
        <div className='app'>
          <Navigation
            State={State}
          />
          <div className='detail'>
            <RouteHandler 
              State={State}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Places;
