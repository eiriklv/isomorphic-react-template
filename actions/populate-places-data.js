'use strict';

module.exports = function(context, payload, done) {
  done = done || function() {};

  context.Api.getPlaces({}, function(err, places) {
    if (err) return done(err);
    context.Dispatcher.emit('POPULATE_PLACES_DATA', places);
    done();
  });
};
