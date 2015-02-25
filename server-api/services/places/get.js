'use strict';

const Place = require('../../models/place');

exports = module.exports = function(payload, callback) {
  Place.findOne({
    id: payload.params.id
  }, function(err, place) {
    callback(err, place || {});
  });
};
