'use strict';

module.exports = {
  getInitialState: function() {
    return [];
  },
  handlers: {
    'DISMISS_ALERT_BY_ID': function(context, payload) {
      let alert = this.state.slice().filter(function(alert) {
        return alert.id === id;
      })[0];

      if (!alert) return;

      let newState = this.state.slice();
      newState.splice(newState.indexOf(alert), 1);
      this.replaceState(newState);
    },
    'DISMISS_ALL_ALERTS': function(context, payload) {
      this.replaceState([]);
    },
    'ADD_ALERT': function(context, payload) {
      let newState = this.state.concat([payload]);
      this.replaceState(newState);
    }
  }
};
