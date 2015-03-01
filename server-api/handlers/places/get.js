'use strict';

const placesServices = require('../../services/places');

exports = module.exports = function(req, res) {
  placesServices.get({
    params: req.params,
    body: req.body,
    query: req.query,
    user: req.user || req.query.user
  }, function(err, result) {
    if (err) {
      return res.status(400).send({
        err: err
      });
    }

    res.status(200).send(result);
  });
};
