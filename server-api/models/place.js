'use strict';

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const schema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

schema.statics.findAllByOwner = function(payload, cb) {
  try {
    userId = ObjectId(payload.userId);
  } catch (e) {
    return cb('invalid objectid for owner supplied:', e);
  }

  this.find({
    owner: userId
  }, cb);
};

schema.statics.findOneByIdAndOwner = function(payload, cb) {
  try {
    placeId = ObjectId(payload.placeId);
    userId = ObjectId(payload.userId);
  } catch (e) {
    return callback('invalid objectid supplied:', e);
  }

  this.findOne({
    _id: placeId,
    owner: userId
  }, cb);
}

module.exports = mongoose.model('place', schema);
