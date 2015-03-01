'use strict';

const ObjectId = require('mongoose').Types.ObjectId;
const Place = require('../../models/place');
const util = require('util');

exports = module.exports = function(payload, callback) {
  let id, owner;

  try {
    id = ObjectId(payload.params.id);
    owner = ObjectId(payload.user._id);
  } catch (e) {
    return callback('invalid objectid supplied');
  }

  Place.findOne({
    _id: id,
    owner: owner
  }, function(err, place) {
    callback(err, place || {});
  });
};
