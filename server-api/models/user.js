'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user', schema);
