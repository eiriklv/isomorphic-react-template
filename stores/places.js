const assign = require('object-assign');
const eventEmitter = require('events').EventEmitter;
const util = require('util');

util.inherits(PlacesStore, eventEmitter);

function PlacesStore(initialData) {
  if (!(this instanceof PlacesStore))
    return new PlacesStore(initialData);

  this.places = assign([], initialData);

  this.eventListeners = [];

  this.getPlaces = function() {
    return assign([], this.places);
  };

  this.removePlace = function(id) {
    var place = this.places.slice().filter(function(place) {
      return place.id === id;
    })[0];

    if (!place) return;

    this.places.splice(this.places.indexOf(place), 1);
    this.emit('update'); // tell the listeners to refetch the places from the store
  };

  this.addPlace = function(place) {
    this.places.push(place);
    this.emit('update');
  };

  // optional way of emitting instead of calling directly
  this.on('add', this.addPlace);
  this.on('remove', this.removePlace);
};

module.exports = PlacesStore;
