const assign = require('object-assign');

function UserStore(initialData) {
  if (!(this instanceof UserStore))
    return new UserStore(initialData);

  this.data = assign({}, initialData);

  this.getUserData = function() {
    return assign({}, this.data);
  }
};

module.exports = UserStore;
