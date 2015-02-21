'use strict';

const places = require('./public/data/places');
const user = require('./public/data/user');
const debug = require('debug')('app');

// this should decide which data to fill the stores
// with on the serverside based on
// - route state
// - session info / cookies
// session data should be put directly in
// by req.session / req.user (passport)
// the data should be fetched with using actions (?)
// or the services/api directly
exports = module.exports = function(req, state) {
  debug(req);
  debug(state);

  return {
    User: user,
    Places: places
  };
};
