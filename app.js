'use strict';

// enables JSX requires
require('node-jsx').install({
  extension: '.jsx'
});

const debug = require('debug')('app');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cachebuster = require('./cachebuster');
const serverRender = require('./server.jsx');

const app = express();

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

// single route handler
app.use('/', serverRender);

// error pages
app.use(function(err, req, res, next) {
  res.status(500);
  // TODO: simple page for errors not in dev environment
  res.send('<pre>' + err.stack + '</pre>');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  debug('Express ' + app.get('env') + ' server listening on port ' + this.address().port);
});
