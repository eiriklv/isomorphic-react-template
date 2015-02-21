// this will depend on both PlacesStore and UserStore as input to the constructor
// - will perform requests via http/api
// - will use the result to update the store store methods (add/remove/replace)
// - can be a waterfall chain of operations that trigger an arbitrary number of operations to stores

module.exports = function(Stores) {
  return function(id) {
    Stores.Places.removePlace(id);
  };
};
