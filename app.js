'use strict';

require('node-jsx').install({
  extension: '.jsx'
});

const debug = require('debug')('app:main');
const config = require('./config');
const appSetup = require('./app-setup');
const app = appSetup.init();

require('./auth');

app.use('/api', require('./server-api'));
app.use('/', require('./server.jsx'));

appSetup.connectToDatabase(config.get('mongo.url'));

appSetup.handleErrors(app);
appSetup.startServer(app, config.get('port'));
