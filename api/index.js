'use strict';

const request = require('superagent');

module.exports.signIn = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};

module.exports.signOut = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};

module.exports.getUserData = function(payload, cb) {
  setImmediate(cb.bind(null, null, {
    username: 'eiriklv',
    fullname: 'Eirik Langholm Vullum',
    token: 'gfgfhjer562gGGgDFjfghdgsd$y34',
    isAuthenticated: true
  }));
};

module.exports.createPlace = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};

module.exports.removePlace = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};

module.exports.getPlaces = function(payload, cb) {
  setImmediate(cb.bind(null, null, [{
    "id": "alghero",
    "name": "Alghero (Sardinia)"
  }, {
    "id": "appennino",
    "name": "Appennini (Umbria)"
  }, {
    "id": "argentiera",
    "name": "Argentiera (Sardinia)"
  }, {
    "id": "assisi",
    "name": "Assisi (Umbria)"
  }, {
    "id": "firenze",
    "name": "Firenze (Tuscany)"
  }, {
    "id": "funes",
    "name": "Funes (South Tyrol)"
  }, {
    "id": "lessinia",
    "name": "Lessinia (Veneto)"
  }, {
    "id": "milano",
    "name": "Milan (Lombardy)"
  }, {
    "id": "palau",
    "name": "Palau (Sardinia)"
  }, {
    "id": "portoferro",
    "name": "Portoferro (Sardinia)"
  }, {
    "id": "sanpantaleo",
    "name": "San Pantaleo (Sardinia)"
  }, {
    "id": "sanzeno",
    "name": "San Zeno (Verona)"
  }, {
    "id": "verona",
    "name": "Lasagna (Verona)"
  }]));
};

module.exports.getPlace = function(payload, cb) {
  setImmediate(cb.bind(null, null, {}));
};
