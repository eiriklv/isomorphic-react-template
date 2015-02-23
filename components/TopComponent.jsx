'use strict';

const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;
const StoreUpdateMixin = require('../mixins/store-update');

const TopComponent = React.createClass({
  mixins: [StoreUpdateMixin],

  childContextTypes: {
    Router: React.PropTypes.any,
    RouterState: React.PropTypes.object,
    Stores: React.PropTypes.object,
    Actions: React.PropTypes.object
  },

  propTypes: {
    Router: React.PropTypes.any,
    RouterState: React.PropTypes.object,
    Stores: React.PropTypes.object,
    Actions: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      Router: React.PropTypes.object,
      RouterState: this.props.RouterState,
      Stores: this.props.Stores,
      Actions: this.props.Actions
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
