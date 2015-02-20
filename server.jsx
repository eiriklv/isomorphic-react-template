'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');

const routes = require('./routes.jsx');
const Html = require('./components/Html.jsx');

var PlacesStore = require('./stores/places-store.js');
var UserStore = require('./stores/user-store.js');

var RemovePlaceAction = require('./actions/remove-place');
var AddPlaceAction = require('./actions/add-place');

module.exports = function(req, res, next, initialContext) {
  Router.run(routes, req.url, function(Handler, state) {

    initialContext = initialContext || {};
    
    var title = DocumentTitle.rewind();

    let Stores = {
      Places: PlacesStore(initialContext.places),
      User: UserStore(initialContext.user)
    };

    let Actions = {
      RemovePlace: RemovePlaceAction(Stores),
      AddPlace: AddPlaceAction(Stores)
    };

    let renderedApp = <Handler
      Stores={Stores}
      Actions={Actions}
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
