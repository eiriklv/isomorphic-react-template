const assign = require('object-assign');
const eventEmitter = require('events').EventEmitter;
const util = require('util');

util.inherits(UserStore, eventEmitter);

function UserStore(initialData) {
  if (!(this instanceof UserStore))
    return new UserStore(initialData);

  this.data = assign({}, initialData);

  this.eventListeners = [];

  this.getData = function() {
    return assign({}, this.data);
  };
};

module.exports = UserStore;
