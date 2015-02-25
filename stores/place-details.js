'use strict';

module.exports = {
  getInitialState: function() {
    return {};
  },
  handlers: {
    'UPDATE_SELECTED_PLACE_DATA': function(context, payload) {
      this.replaceState(payload);
    },
    'SET_SELECTED_PLACE_AS_LOADING': function(context) {
      this.replaceState({
        isLoading: true
      });
    }
  }
};
