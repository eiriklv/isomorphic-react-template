'use strict';

module.exports = {
  getInitialState: function() {
    return {};
  },
  handlers: {
    'POPULATE_USER_DATA': function(context, payload) {
      this.replaceState(payload);
    }
  }
};
