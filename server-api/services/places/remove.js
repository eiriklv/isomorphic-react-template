'use strict';

const Place = require('../../models/place');

exports = module.exports = function(payload, callback) {
  Place.remove({
    id: payload.params.id
  }, function(err) {
    callback(err);
  });
};
