'use strict';

const ObjectId = require('mongoose').Types.ObjectId;;
const Place = require('../../models/place');

exports = module.exports = function(payload, callback) {
  var userId;

  try {
    userId = ObjectId(payload.userId);
  } catch (e) {
    return callback('invalid objectid for owner supplied');
  }

  Place.find({
    owner: userId
  }, function(err, places) {
    callback(err, places || []);
  });
};
