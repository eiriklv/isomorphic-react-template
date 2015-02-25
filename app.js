'use strict';

require('node-jsx').install({
  extension: '.jsx'
});

const debug = require('debug')('app:main');
const appSetup = require('./app-setup');
const app = appSetup.init();

app.use('/api', require('./server-api'));
app.use('/', require('./server.jsx'));

appSetup.connectToDatabase(process.env.MONGO_URL || 'mongodb://localhost/isomorphic-boilerplate');
appSetup.handleErrors(app);
appSetup.startServer(app, process.env.PORT || 3000);
