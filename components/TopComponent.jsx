'use strict';

const React = require('react');
const App = require('./App.jsx');
const StoreUpdateMixin = require('../mixins/store-update');

const TopComponent = React.createClass({
  mixins: [StoreUpdateMixin],

  propTypes: {
    Stores: React.PropTypes.object,
    Actions: React.PropTypes.object
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
