'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('place', schema);
