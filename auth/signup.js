'use strict';

const UserModel = require('../server-api/models/user');

module.exports = function(req, email, password, done) {
  User.findOne({
    'email': email
  }, function(err, user) {
    if (err) return done(err);

    if (user) {
      return done(null, false, {
        message: 'This email is already in use'
      });
    }

    let newUser = new User();
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
