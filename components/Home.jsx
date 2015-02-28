'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Flux = require('fluxomorph');

var Home = React.createClass({
  contextTypes: {
    Flux: React.PropTypes.object.isRequired,
    RouterState: React.PropTypes.object.isRequired
  },

  statics: {
    willTransitionTo: function(transition, params, query, done) {
      transition.context.Actions.RefreshLoginStatus({}, function(err) {
        if (!transition.context.Stores.Auth.getState().isLoggedIn) {
          transition.redirect('/login');
        }
        done();
      });
    }
  },

  render: function() {
    return (
      <RouteHandler
        State={this.props.State}
      />
    );
  }
});

module.exports = Home;
