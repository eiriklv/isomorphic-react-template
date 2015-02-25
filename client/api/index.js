'use strict';

const request = require('superagent');
const apiUrl = process.env.API_URL;
const places = require('./dummy-data').places;
const user = require('./dummy-data').user;

module.exports.signIn = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};

module.exports.signOut = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};

module.exports.getUserData = function(payload, cb) {
  setTimeout(cb.bind(null, null, user), 100);
};

module.exports.createPlace = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};

module.exports.removePlace = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};

module.exports.getPlaces = function(payload, cb) {
  request
    .get(apiUrl + '/places')
    .end(function(err, res) {
      cb(err, res.body || []);
    });
};

module.exports.getPlaceDetails = function(id, cb) {
  request
    .get(apiUrl + '/places/' + id)
    .end(function(err, res) {
      cb(err, res.body || {});
    });
};
