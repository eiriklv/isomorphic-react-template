'use strict';

module.exports = {
  getInitialState: function() {
    return {};
  },
  handlers: {
    'UPDATE_USER_DATA': function(context, payload) {
      this.replaceState(payload);
    }
  }
};
