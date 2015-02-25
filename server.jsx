'use strict';

const debug = require('debug')('app:server-render');
const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const routes = require('./routes.jsx');
const Html = require('./components/Html.jsx');

const Flux = require('fluxomorph');
const Stores = require('./stores');
const Actions = require('./actions');
const Api = require('./api');

const renderApp = function(req, callback) {
  let flux = Flux({
    Stores: Stores,
    Actions: Actions
  });

  let RouterInstance = Router.create({
    routes: routes,
    location: req.url,
    transitionContext: flux.getContext(),
    onAbort: callback.bind(null, null), // function(redirect) {...}
    onError: callback.bind(null)        // function(err) {...}
  });

  // add the router and the api
  // to the flux context, so that
  // we can use it "anywhere"
  flux.addToContext('Router', RouterInstance);
  flux.addToContext('Api', Api);

  RouterInstance.run(function(Handler, routerState) {
    // here out stores have already been filled with data
    // using actions and the api context
    // - this means that we are ready to
    // dehydrate and pass this as context
    // to the client

    // all handlers have declared their data
    // needs in statics.willTransitionTo
    // - where they can call actions (async - by having action accept a optional done-callback)
    // - where they can rehydrate on the client if applicable
    // - this would also enable you to turn isomorphism on/off without big impact
    
    let title = DocumentTitle.rewind();
    
    let markup = React.renderToString(
      <Handler
        Flux={flux.getContext()}
        RouterState={routerState}
      />
    );

    let html = React.renderToStaticMarkup(
      <Html
        title={title}
        markup={markup}
        __initialContext={flux.dehydrate()}
      />
    );

    callback(null, null, '<!DOCTYPE html>' + html)
  });
}

module.exports = function(req, res, next) {
  renderApp(req, function(err, redirect, html) {
    if (err && err.notFound) return res.status(404).send(html);
    if (!err && redirect) return res.redirect(303, redirect.to);
    if (err) return next(err);

    res.send(html);
  })
};
