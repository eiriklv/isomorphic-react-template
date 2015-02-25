'use strict';

const Place = require('../../models/place');

exports = module.exports = function(payload, callback) {
  Place.find({}, function(err, places) {
    callback(err, places || []);
  });
};
