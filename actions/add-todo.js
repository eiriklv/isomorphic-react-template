// this will depend on both PlacesStore and UserStore as input to the constructor
// - will perform requests via http/api
// - will use the result to update the store store methods (add/remove/retodo)
// - can be a waterfall chain of operations that trigger an arbitrary number of operations to stores
// - e.g (check User/Auth Store, perform data operation (http), update applicable stores via their methods)

module.exports = function(Stores) {
  return function(todo) {
    Stores.Places.addTodoItem(todo);
  };
};
