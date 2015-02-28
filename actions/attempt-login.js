'use strict';

module.exports = function(context, payload, done) {
  done = done || function() {};

  context.Api.logIn(payload, function(err, result) {
    if (err) return done(err);

    console.log('-------------------------');
    console.log(result);

    if (!result.user) {
      context.Dispatcher.emit('SET_USER_AS_LOGGED_OUT');
    } else {
      context.Dispatcher.emit('SET_USER_AS_LOGGED_IN', result);
    }

    done();
  });
};
