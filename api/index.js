'use strict';

const request = require('superagent');

module.exports.signIn = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};

module.exports.signOut = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}))
};

module.exports.createPlace = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}))
};

module.exports.removePlace = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}))
};

module.exports.getPlaces = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}))
};

module.exports.getPlace = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}))
};
