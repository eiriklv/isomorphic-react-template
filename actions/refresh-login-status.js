'use strict';

module.exports = function(context, payload, done) {
  done = done || function() {};

  context.Api.getLoginStatus(payload, function(err, user) {
    if (err) return done(err);

    if (!user) {
      context.Dispatcher.emit('SET_USER_AS_LOGGED_OUT');
    } else {
      context.Dispatcher.emit('SET_USER_AS_LOGGED_IN', user);
    }

    done();
  });
};
