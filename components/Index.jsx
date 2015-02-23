'use strict';

const React = require('react');

const Index = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to Index');
      done();
    }
  },

  render: function() {
    return <p>Please select a place from the left.</p>;
  }
});

module.exports = Index;
