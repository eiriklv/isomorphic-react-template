'use strict';

const debug = require('debug')('app:config');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cachebuster = require('./cachebuster');
const mongoose = require('mongoose');

const app = express();

module.exports.init = function() {
  app.use(logger(app.get('env') === 'production' ? 'combined' : 'dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser());

  // static files with cache buster
  const publicPath = path.join(__dirname, 'public');

  app.use(express.static(publicPath));

  if (app.get('env') === 'production') {
    app.get(cachebuster.path, cachebuster.remove, express.static(publicPath), cachebuster.restore);
  }

  if (app.get('env') === 'development') {
    // run livereload and webpack dev server
    require('./dev-tools');
    // use webpack dev server for serving js files
    app.use('/js', function(req, res) {
      res.redirect('http://localhost:3001/js' + req.path);
    });
  }

  return app;
};

module.exports.handleErrors = function(app) {
  // error pages
  app.use(function(err, req, res, next) {
    res.status(500);
    // TODO: simple page for errors not in dev environment
    res.send('<pre>' + err.stack + '</pre>');
  });
}

module.exports.startServer = function(app, port) {
  app.set('port', port);

  app.listen(app.get('port'), function() {
    debug('Express ' + app.get('env') + ' server listening on port ' + this.address().port);
  });
};

module.exports.connectToDatabase = function(url) {
  function connect() {
    mongoose.connect(url);
  }

  mongoose.connection.on('open', function(ref) {
    debug('open connection to mongo server.');
  });

  mongoose.connection.on('connected', function(ref) {
    debug('connected to mongo server.');
  });

  mongoose.connection.on('disconnected', function(ref) {
    debug('disconnected from mongo server.');

    debug('retrying connection in 2 seconds..');
    setTimeout(function() {
      connect();
    }.bind(this), 2000);
  });

  mongoose.connection.on('close', function(ref) {
    debug('closed connection to mongo server');
  });

  mongoose.connection.on('error', function(err) {
    debug('error connection to mongo server!');
    debug(err);
  });

  mongoose.connection.on('reconnect', function(ref) {
    debug('reconnect to mongo server.');
  });

  connect();
};
