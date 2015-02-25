'use strict';

const User = require('../../models/user');

exports = module.exports = function(payload, callback) {
  callback(null, {
    username: 'eiriklv',
    fullname: 'Eirik Langholm Vullum',
    token: 'gfgfhjer562gGGgDFjfghdgsd$y34',
    isAuthenticated: true
  });
};
