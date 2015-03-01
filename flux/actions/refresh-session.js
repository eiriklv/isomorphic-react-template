'use strict';

module.exports = function(context, payload, done) {
  done = done || function() {};

  context.Api.getSession(payload, function(err, result) {
    if (err) {
      context.Dispatcher.emit('ADD_ALERT', err);
      return done();
    }

    if (!result.user) {
      context.Dispatcher.emit('SET_USER_AS_LOGGED_OUT');
    } else {
      context.Dispatcher.emit('SET_USER_AS_LOGGED_IN', result);
    }

    done();
  });
};
