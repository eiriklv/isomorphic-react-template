// this will depend on both PlacesStore and UserStore as input to the constructor
// - will perform requests via http/api
// - will use the result to update the store store methods (add/remove/replace)
// - can be a waterfall chain of operations that trigger an arbitrary number of operations to stores
// - e.g (check User/Auth Store, perform data operation (http), update applicable stores via their methods)
// - do route transitions here after async operations like login / signup

module.exports = function(Stores, router) {
  return function(id) {
    Stores.Places.removePlace(id);
    router.transitionTo('/places');
  };
};
