'use strict';

const React = require('react');

// Handle the HTML rendering on the server
const Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='icon' type='image/png' href='/images/favicon.png' />
          <link rel='stylesheet' href='/css/main.css' />
          <script src='/js/lib.js'></script>
          <script src='/js/main.js'></script>
          <script dangerouslySetInnerHTML={{__html: '__initialContext = ' + JSON.stringify(this.props.__initialContext)}} />
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
      </html>
    );
  }
});

module.exports = Html;
