'use strict';

const React = require('react');
const App = require('./App.jsx');
const StoreUpdateMixin = require('../mixins/store-update');

const TopComponent = React.createClass({
  mixins: [StoreUpdateMixin],

  propTypes: {
    Stores: React.PropTypes.shape({
      Places: React.PropTypes.object,
      User: React.PropTypes.object
    }),
    Actions: React.PropTypes.shape({
      AddPlace: React.PropTypes.function,
      RemovePlace: React.PropTypes.function
    })
  },

  getInitialState: function() {
    return {
      places: this.props.Stores.Places.getPlaces(),
      user: this.props.Stores.User.getUserData(),
      title: 'Some places in Italy'
    }
  },

  updateState: function() {
    this.setState({
      places: this.props.Stores.Places.getPlaces(),
      user: this.props.Stores.User.getUserData()
    });
  },

  render: function() {
    return (
      <App 
        Data={this.state}
        Actions={this.props.Actions}
      />
    );
  }
});

module.exports = TopComponent;
