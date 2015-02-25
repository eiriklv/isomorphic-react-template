'use strict';

const request = require('superagent');
const apiUrl = process.env.API_URL;
const places = require('./dummy-data').places;
const user = require('./dummy-data').user;

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
