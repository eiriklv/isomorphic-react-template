'use strict';

const React = require('react');

const ErrorComponent = React.createClass({
  propTypes: {
    error: React.PropTypes.object
  },

  render: function() {
    console.error(this.props.error);
    
    return (
      <h3>Something bad happened...</h3>
      <p>{error.message}</p>
    );
  }
});

module.exports = ErrorComponent;
