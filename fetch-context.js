'use strict';

const places = require('./public/data/places');
const user = require('./public/data/user');
const debug = require('debug')('app:context');

// this should decide which data to fill the stores
// with on the serverside based on
// - route state
// - session info / cookies
// session data should be put directly in
// by req.session / req.user (passport)
// the data should be fetched with using actions (?)
// or the services/api directly
exports = module.exports = function(api) {
  return function(req, callback) {
    setImmediate(callback.bind(null, null, {
      User: user,
      Places: places
    }));
  };
}
