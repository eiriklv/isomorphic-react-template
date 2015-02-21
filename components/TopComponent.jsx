'use strict';

const React = require('react');
const App = require('./App.jsx');
const StoreUpdateMixin = require('../mixins/store-update');

const TopComponent = React.createClass({
  mixins: [StoreUpdateMixin],

  propTypes: {
    Stores: React.PropTypes.shape({
      Places: React.PropTypes.object,
      User: React.PropTypes.object,
      Alerts: React.PropTypes.object
    }),
    Actions: React.PropTypes.shape({
      AddPlace: React.PropTypes.function,
      RemovePlace: React.PropTypes.function,
      DismissAlert: React.PropTypes.function
    })
  },

  getInitialState: function() {
    return {
      title: 'Some Places in Italy'
    }
  },

  render: function() {
    return (
      <App 
        State={this.state}
        Actions={this.props.Actions}
      />
    );
  }
});

module.exports = TopComponent;
