'use strict';

module.exports = function(context, payload, done) {
  done = done || function() {};

  context.Dispatcher.emit('SET_PLACES_AS_LOADING');

  context.Api.getPlaces({
    params: payload.params,
    query: payload.query,
    user: payload.user.user
  }, function(err, places) {
    if (err) {
      context.Dispatcher.emit('POPULATE_PLACES_DATA', []);
      context.Dispatcher.emit('ADD_ALERT', err);
      return done();
    }
    
    context.Dispatcher.emit('POPULATE_PLACES_DATA', places);
    done();
  });
};
