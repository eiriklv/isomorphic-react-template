'use strict';

const UserModel = require('../models/user');

module.exports = function(req, email, password, done) {
  UserModel.findOne({
    'email': email
  }, function(err, user) {
    if (err) return done(err);

    if (user) {
      return done(null, false, {
        message: 'This email is already in use'
      });
    }

    let newUser = new UserModel();
    newUser.email = email;
    newUser.password = password;

    newUser.save(function(err, product) {
      if (err) return done(err);

      done(null, product, {
        message: 'Successfully signed up'
      });
    });
  });
};
