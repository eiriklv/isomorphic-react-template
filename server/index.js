import { resolve } from 'path';

import express from 'express';
import proxy from 'proxy-middleware';
import compress from 'compression';
import locale from 'locale';
import serialize from 'serialize-javascript';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';

import config from '../config/app';

// fluxible app stuff
import { navigateAction } from 'flux-router-component';
import fetchrPlugin from 'fluxible-plugin-fetchr';
import app from '../app';
import flickrService from '../services/flickr';

// initialize express
const server = express();
const morgan = require('morgan');
server.use(morgan(server.get('env') === 'production' ? 'combined' : 'dev'));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(locale(config.locales));
server.use(compress());
server.use(csurf({ cookie: true }));

// static files
const publicPath = resolve(__dirname, '../public');
server.use(express.static(publicPath, { maxAge: 365*24*60*60 }));

// setup the fetchr middleware
const fetchrInstance = fetchrPlugin({ xhrPath: '/api' });
fetchrInstance.registerService(flickrService);
app.plug(fetchrInstance);

server.use(fetchrInstance.getXhrPath(), fetchrInstance.getMiddleware());

// render fluxible app
server.use(function (req, res, next) {

  // create a fluxible-app context for each request
  // (the argument is needed by the fetchr plugin)
  const context = app.createContext({
    req: req, 
    xhrContext: { _csrf: req.csrfToken(), lang: 'en-US' }
  });

  const actionContext = context.getActionContext();

  actionContext.executeAction(navigateAction, { url: req.url }, (err) => {
    
    if (err) {
      if (err.status && err.status === 404) next();
      else next(err);
      return;
    }
    console.log('dehydrate app status', context._dispatcher.storeInstances.PhotosStore.photos.length)
    
    // dehydrate app status
    res.locals.state = 'window.App=' + serialize(app.dehydrate(context), 'App');

    // where the mainScript (client) is located according to the last webpack's 
    // build (webpack/browser.config in production or webpack/hot.config in dev)
    import stats from './webpack-stats.json';
    res.locals.mainScript = `${stats.publicPath}${stats.mainChunk}`;

    // pass context through locals
    res.locals.context = context.getComponentContext();
    
    // res.expose(app.dehydrate(res.locals.context), 'Page');

    // console.log('locals', res.locals.context);
    // use html from webpack-compiled html.jsx
    import html from './html.generated';
    console.log(serialize(app.dehydrate(context), 'App'));
    res.status(200).send(html(req, res));

  });
});


server.use((req, res, next) => {
  res.status(404).send("Not found.");
});

// error pages
server.use((err, req, res, next) => {
  res.status(500).send(`<pre>${err.stack}</pre>`);
});

server.set('port', process.env.PORT || 3000);

if (server.get('env') === 'development')
  require('../webpack/dev-server');

server.listen(server.get('port'), () => {
  console.log(`Express ${server.get('env')} server listening on ${server.get('port')}`);
});
