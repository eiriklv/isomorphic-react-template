const assign = require('object-assign');

function PlacesStore(initialData) {
  if (!(this instanceof PlacesStore))
    return new PlacesStore(initialData);

  this.data = assign({}, initialData);

  this.getPlaces = function() {
    return assign([], this.data);
  }
};

module.exports = PlacesStore;
