'use strict';

const placesServices = require('../../services/places');

exports = module.exports = function(req, res) {
  let userId = req.user ?
    req.user._id :
    req.query.id;

  placesServices.getAll({
    userId: userId
  }, function(err, result) {
    if (err) {
      return res.status(400).send({
        err: err
      });
    }

    res.status(200).send(result);
  });
};
