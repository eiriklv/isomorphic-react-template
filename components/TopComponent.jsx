'use strict';

const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;
const StoreUpdateMixin = require('../mixins/store-update');

const TopComponent = React.createClass({
  mixins: [StoreUpdateMixin],

  childContextTypes: {
    Route: React.PropTypes.object,
    Actions: React.PropTypes.object
  },

  propTypes: {
    Route: React.PropTypes.object,
    Stores: React.PropTypes.object,
    Actions: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      Actions: this.props.Actions,
      Route: this.props.Route
    };
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
