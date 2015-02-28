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

module.exports.getSession = function(user, cb) {
  if (user) return setImmediate(cb.bind(null, null, user));
  
  request
    .get(apiUrl + '/session')
    .end(function(err, res) {
      cb(err, res.body || {});
    });
};

module.exports.signUp = function(payload, cb) {
  request
    .post(apiUrl + '/signup')
    .send({
      email: payload.email,
      password: payload.password
    })
    .end(function(err, res) {
      cb(err, res.body || {})
    });
};

module.exports.logIn = function(payload, cb) {
  request
    .post(apiUrl + '/session')
    .send({
      email: payload.email,
      password: payload.password
    })
    .end(function(err, res) {
      cb(err, res.body || {})
    });
};

module.exports.logOut = function(payload, cb) {
  request
    .del(apiUrl + '/session')
    .end(function(err, res) {
      cb(err, res.body || {})
    });
};
