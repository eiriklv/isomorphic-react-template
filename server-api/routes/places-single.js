'use strict';

var express = require('express');
var router = express();

var handlers = require('../handlers/places');

exports = module.exports = function(path) {
  router.route(path)
    .get(handlers.get)
    .put(handlers.update)
    .delete(handlers.remove);

  return router;
};
