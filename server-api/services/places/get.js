'use strict';

const ObjectId = require('mongoose').Types.ObjectId;
const Place = require('../../models/place');
const util = require('util');

exports = module.exports = function(payload, callback) {
  let placeId, userId;

  try {
    placeId = ObjectId(payload.placeId);
    userId = ObjectId(payload.userId);
  } catch (e) {
    return callback('invalid objectid supplied');
  }

  Place.findOne({
    _id: placeId,
    owner: userId
  }, function(err, place) {
    callback(err, place || {});
  });
};
