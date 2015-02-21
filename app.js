'use strict';

// enables JSX requires
require('node-jsx').install({
  extension: '.jsx'
});

const debug = require('debug')('app:main');
const expressConfig = require('./express-config');
const serverRender = require('./server.jsx');

var app = expressConfig.setup();

// api route handler
app.use('/api', function(req, res) {
  res.send({
    user: 'eiriklv',
    token: '4563254324gGFDDGFfwefdsSDFfsD'
  });
});

// app route handler
app.use('/', serverRender);

expressConfig.handleErrors(app);
expressConfig.startServer(app, process.env.PORT || 3000);
