'use strict';

const React = require('react');

const Loading = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to Loading');
      done();
    }
  },

  render: function() {
    return <h3>Loading...</h3>;
  }
});

module.exports = Loading;
