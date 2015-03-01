'use strict';

const ObjectId = require('mongoose').Types.ObjectId;;
const Place = require('../../models/place');

exports = module.exports = function(payload, callback) {
  var owner;

  try {
    owner = ObjectId(payload.user._id);
  } catch (e) {
    return callback('invalid objectid supplied');
  }

  Place.find({
    owner: owner
  }, function(err, places) {
    callback(err, places || []);
  });
};
