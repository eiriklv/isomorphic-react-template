'use strict';

const Place = require('../../models/place');

exports = module.exports = function(payload, callback) {
  Place.findOneAndUpdate({
    id: payload.params.id
  }, payload.body, function(err) {
    callback(err);
  });
};
