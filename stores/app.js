const assign = require('object-assign');
const eventEmitter = require('events').EventEmitter;
const util = require('util');

const CHANGE_EVENT = 'change';
const LOADING_EVENT = 'loading';
const ERROR_EVENT = 'failed';

util.inherits(AppStore, eventEmitter);

function AppStore(initialData) {
  if (!(this instanceof AppStore))
    return new AppStore(initialData);

  this.options = assign({
    title: 'Some Places in Italy'
  }, initialData || {});

  this.getData = function() {
    return assign({}, this.options);
  };

  this.setState = function(state) {
    this.options = assign(this.options, state);
    this.emit(CHANGE_EVENT);
  };

  this.replaceState = function(state) {
    this.options = assign({}, state);
    this.emit(CHANGE_EVENT);
  };
};

module.exports = AppStore;
