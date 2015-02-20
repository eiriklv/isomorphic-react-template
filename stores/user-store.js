const assign = require('object-assign');
const eventEmitter = require('events').EventEmitter;
const util = require('util');

util.inherits(UserStore, eventEmitter);

function UserStore(initialData) {
  if (!(this instanceof UserStore))
    return new UserStore(initialData);

  this.data = assign({}, initialData);

  this.eventListeners = [];

  this.getUserData = function() {
    return assign({}, this.data);
  };

  this.addEvent = function(event, listener) {
    this.eventListeners.push(listener);
    this.on(event, listener);
  };

  this.removeEvent = function(event, listener) {
    this.eventListeners.splice(this.eventListeners.indexOf(listener));
    this.removeListener(event, listener);
  };
};

module.exports = UserStore;
