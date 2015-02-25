'use strict';

const userServices = require('../../services/user');

exports = module.exports = function(req, res) {
  userServices.get({
    params: req.params,
    body: req.body,
    query: req.query,
    session: req.session,
    user: req.user
  }, function(err, result) {
    if (err) return res.status(400).send(err);
    res.status(200).send(result);
  });
};
