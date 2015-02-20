'use strict';

const CHANGE_EVENT = 'change';

exports = module.exports = {
  __updateState: function() {
    let state = {};

    for (let Store in this.props.Stores) {
      state[Store] = this.props.Stores[Store].getData();
    }

    this.setState(state);
  },

  componentWillMount: function() {
    for (let Store in this.props.Stores) {
      this.props.Stores[Store].on(CHANGE_EVENT, this.__updateState);
    }
  },

  componentWillUnmount: function() {
    for (let Store in this.props.Stores) {
      this.props.Stores[Store].removeListener(CHANGE_EVENT, this.__updateState);
    }
  },

  getInitialState: function() {
    let initialState = {};

    for (let Store in this.props.Stores) {
      initialState[Store] = this.props.Stores[Store].getData();
    }

    return initialState;
  }
};
