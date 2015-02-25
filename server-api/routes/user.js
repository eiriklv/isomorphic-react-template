'use strict';

var express = require('express');
var router = express();

var handlers = require('../handlers/user');

exports = module.exports = function(path) {
  router.route(path)
    .get(handlers.get);

  return router;
};
