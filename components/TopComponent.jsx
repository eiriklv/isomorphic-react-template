'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var StoreUpdateMixin = require('../mixins/store-update');
var Flux = require('fluxomorph');

var TopComponent = React.createClass({
  mixins: [Flux.StateMixin('Flux')],

  childContextTypes: {
    Flux: React.PropTypes.object.isRequired,
    RouterState: React.PropTypes.object.isRequired
  },

  propTypes: {
    Flux: React.PropTypes.any,
    RouterState: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      Flux: this.props.Flux,
      RouterState: this.props.RouterState
    };
  },

  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to TopComponent');
      if (!transition.context.shouldUpdate) return done();
      
      transition.context.Actions.PopulateUserData({
        params: params,
        query: query
      }, done);
    }
  },

  render: function() {
    return (
      <RouteHandler
        State={this.state}
      />
    );
  }
});

module.exports = TopComponent;
