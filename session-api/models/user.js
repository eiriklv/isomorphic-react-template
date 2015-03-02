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

schema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null); // this is syncronous (future: async)
};

schema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password); // this is syncronous (future: async)
};

module.exports = mongoose.model('user', schema);
