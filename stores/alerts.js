const assign = require('object-assign');
const eventEmitter = require('events').EventEmitter;
const util = require('util');

const CHANGE_EVENT = 'change';

util.inherits(AlertsStore, eventEmitter);

function AlertsStore(initialData) {
  if (!(this instanceof AlertsStore))
    return new AlertsStore(initialData);

  this.alerts = assign([], initialData || []);

  this.eventListeners = [];

  this.getData = function() {
    return assign([], this.alerts);
  };

  this.dismissAllAlerts = function() {
    this.alerts = [];
    this.emit(CHANGE_EVENT);
  };

  this.dismissAlert = function(id) {
    var alert = this.alerts.slice().filter(function(alert) {
      return alert.id === id;
    })[0];

    if (!alert) return;

    this.alerts.splice(this.alerts.indexOf(alert), 1);
    this.emit(CHANGE_EVENT);
  };

  this.addAlert = function(alert) {
    this.alerts.push(alert);
    this.emit(CHANGE_EVENT);
  };

  // optional way of emitting instead of calling directly
  // - not quite sure how to do this without testing some more
  this.on('add', this.addAlert);
  this.on('remove', this.dismissAlert);
  this.on('removeAll', this.dismissAllAlerts);
};

module.exports = AlertsStore;
