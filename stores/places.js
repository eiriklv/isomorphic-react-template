'use strict';

module.exports = {
  getInitialState: function() {
    return [];
  },
  handlers: {
    'ADD_PLACE_TO_LIST': function(context, payload) {
      let newState = this.state.concat([payload]);
      this.replaceState(newState);
    },
    'REMOVE_PLACE_FROM_LIST': function(context, payload) {
      let place = this.state.slice().filter(function(place) {
        return place.id === id;
      })[0];

      if (!place) return;

      let newState = this.state.slice();
      newState.splice(newState.indexOf(place), 1);
      this.replaceState(newState);
    },
    'UPDATE_PLACES_DATA': function(context, payload) {
      this.replaceState(payload);
    }
  }
};
