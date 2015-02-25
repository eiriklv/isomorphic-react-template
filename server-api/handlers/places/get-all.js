'use strict';

const placesServices = require('../../services/places');

exports = module.exports = function(req, res) {
  placesServices.getAll({
    params: req.params,
    body: req.body,
    query: req.query
  }, function(err, result) {
    if (err) return res.status(400).send(err);
    res.status(200).send(result);
  });
};
