'use strict';

const CHANGE_EVENT = 'change';
const LOADING_EVENT = 'loading';
const ERROR_EVENT = 'failed';

exports = module.exports = {
  __updateState: function(Store, isLoading, error) {
    let state = {};
    state[Store] = {};
    state[Store].isLoading = isLoading;
    state[Store].error = error;
    state[Store].data = this.props.Stores[Store].getData();
    this.setState(state);
  },

  componentWillMount: function() {
    for (let Store in this.props.Stores) {
      this.props.Stores[Store].on(ERROR_EVENT, this.__updateState.bind(this, Store, false));
      this.props.Stores[Store].on(LOADING_EVENT, this.__updateState.bind(this, Store, true));
      this.props.Stores[Store].on(CHANGE_EVENT, this.__updateState.bind(this, Store, false));
    }
  },

  componentWillUnmount: function() {
    for (let Store in this.props.Stores) {
      this.props.Stores[Store].removeListener(CHANGE_EVENT, this.__updateState);
      this.props.Stores[Store].removeListener(LOADING_EVENT, this.__setAsLoading);
    }
  },

  getInitialState: function() {
    let initialState = {};

    for (let Store in this.props.Stores) {
      initialState[Store] = {};
      initialState[Store].isLoading = false;
      initialState[Store].data = this.props.Stores[Store].getData();
    }

    return initialState;
  }
};
