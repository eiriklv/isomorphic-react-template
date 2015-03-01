'use strict';

module.exports = function(context, payload, done) {
  done = done || function() {};

  context.Dispatcher.emit('SET_SELECTED_PLACE_AS_LOADING');

  context.Api.getPlaceDetails({
    params: payload.params,
    query: payload.query,
    user: payload.user.user
  }, function(err, place) {
    if (err) {
      context.Dispatcher.emit('SET_SELECTED_PLACE_AS_NOT_FOUND');
      context.Dispatcher.emit('ADD_ALERT', err);
      return done();
    }

    context.Dispatcher.emit('POPULATE_SELECTED_PLACE_DATA', place);
    done();
  });
};
