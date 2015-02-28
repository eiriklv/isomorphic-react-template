'use strict';

const UserModel = require('../server-api/models/user');

module.exports = function(req, email, password, done) {
  UserModel.findOne({
    'email': email
  }, function(err, user) {
    if (err) return done(err);

    if (!user) {
      return done(null, false, {
        message: 'User not found'
      });
    }

    if (!user.validPassword(password)) {
      return done(null, false, {
        message: 'Wrong password'
      });
    }

    return done(null, user, {
      message: 'Successfully logged in'
    });
  });
};
