'use strict';

module.exports = {
  getInitialState: function() {
    return [];
  },
  handlers: {
    'DISMISS_ALL_ALERTS': function(context, payload) {
      this.replaceState([]);
    },
    'ADD_ALERT': function(context, payload) {
      let newState = this.state.concat([payload]);
      this.replaceState(newState);
    }
  }
};
