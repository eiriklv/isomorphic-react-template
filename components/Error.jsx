'use strict';

const React = require('react');

const ErrorComponent = React.createClass({
  propTypes: {
    error: React.PropTypes.object
  },

  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to Error');
      done();
    }
  },

  render: function() {
    console.error(this.props.error);
    
    return (
      <div>
        <h3>Something bad happened...</h3>
        <p>{error.message}</p>
      </div>
    );
  }
});

module.exports = ErrorComponent;
