'use strict';

const debug = require('debug')('app:config');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cachebuster = require('./cachebuster');

const app = express();

module.exports.setup = function() {
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
