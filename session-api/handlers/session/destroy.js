'use strict';

const passport = require('passport');

exports = module.exports = function(req, res, next) {
  req.logout();
  res.status(200).send({
    message: 'Successfully logged out'
  });
};
