'use strict';

// enables JSX requires
require('node-jsx').install({
  extension: '.jsx'
});

const debug = require('debug')('app:main');
const appSetup = require('./app-setup');
const app = appSetup.init();

// server api route handler
app.use('/api', require('./server-api'));

// app route handler
app.use('/', require('./server.jsx'));

// connect to db
appSetup.connectToDatabase(process.env.MONGO_URL || 'mongodb://localhost/isomorphic-boilerplate');
appSetup.handleErrors(app);
appSetup.startServer(app, process.env.PORT || 3000);
