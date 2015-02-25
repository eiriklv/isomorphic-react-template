'use strict';

// this will depend on both PlacesStore and UserStore as input to the constructor
// - will perform requests via http/api
// - will use the result to update the store store methods (add/remove/replace)
// - can be a waterfall chain of operations that trigger an arbitrary number of operations to stores
// - e.g (check User/Auth Store, perform data operation (http), update applicable stores via their methods)
// - do route transitions here after async operations like login / signup

module.exports = function(context, payload, done) {
  done = done || function() {};

  context.Dispatcher.emit('SET_SELECTED_PLACE_AS_LOADING');

  context.Api.getPlaceDetails(payload.params.id, function(err, place) {
    if (err) return done(err);
    context.Dispatcher.emit('POPULATE_SELECTED_PLACE_DATA', place);
    done();
  });
};
