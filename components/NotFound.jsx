'use strict';

const React = require('react');

const NotFound = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to NotFound');
      done();
    }
  },

  render: function() {
    return <p>404 Not Found</p>;
  }
});

module.exports = NotFound;
