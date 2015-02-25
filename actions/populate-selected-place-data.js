'use strict';

module.exports = function(context, payload, done) {
  done = done || function() {};

  context.Dispatcher.emit('SET_SELECTED_PLACE_AS_LOADING');

  context.Api.getPlaceDetails(payload.params.id, function(err, place) {
    if (err) return done(err);
    context.Dispatcher.emit('POPULATE_SELECTED_PLACE_DATA', place);
    done();
  });
};
