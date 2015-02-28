'use strict';

module.exports = {
  getInitialState: function() {
    return {
      isLoggedIn: false,
      user: {}
    };
  },
  handlers: {
    'SET_USER_AS_LOGGED_IN': function(context, user) {
      this.replaceState({
        isLoggedIn: true,
        user: user
      });
    },
    'SET_USER_AS_LOGGED_OUT': function(context) {
      this.replaceState({
        isLoggedIn: false
      });
    }
  }
};
