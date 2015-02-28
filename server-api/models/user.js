'use strict';

const mongoose = require('mongoose');

var schema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

schema.methods.validPassword = function(password) {
  return (password === this.password);
};

module.exports = mongoose.model('user', schema);
