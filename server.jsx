'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const routes = require('./routes.jsx');
const Html = require('./components/Html.jsx');

var PlacesStore = require('./stores/places-store.js');
var UserStore = require('./stores/user-store.js');

module.exports = function(req, res, next, initialContext) {
  Router.run(routes, req.url, function(Handler, state) {

    initialContext = initialContext || {};
    
    var title = DocumentTitle.rewind();

    let renderedApp = <Handler
      Stores={{
        Places: PlacesStore(initialContext.places),
        User: UserStore(initialContext.user)
      }}
    />;

    var markup = React.renderToString(renderedApp);
    
    var html = React.renderToStaticMarkup(<Html
      title={title}
      markup={markup}
      __initialContext={initialContext}
    />);

    res.send('<!DOCTYPE html>' + html);
  });
};
