'use strict';

exports = module.exports = {
  statics: {
    willTransitionTo: function(transition, params, query, done) {
      if (!transition.context.Stores.User.getData().isAuthenticated) {
        console.log('user is not authenticated!');
        transition.redirect('/');
      } else {
        console.log('user is authenticated!');
      }
      done();
    }
  }
};
