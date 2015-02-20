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

    // optimistic update
    this.places.splice(this.places.indexOf(place), 1);
    this.emit('update'); // tell the listeners to refetch the places from the store

    // realistic update
    // - do some async operation via http to the api
    // - fetch the results with the current store settings and save to store
    // - if it fails remove the pushed data from the store
    // this.emit('update')
  };

  this.addPlace = function(place) {
    // optimistic update
    this.places.push(place);
    this.emit('update');

    // realistic update
    // - do some async operation via http to the api
    // - fetch the results with the current store settings and save to store
    // - if it fails remove the pushed data from the store
    // this.emit('update')
  };
};

module.exports = PlacesStore;
