'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const RouteHandler = Router.RouteHandler;
const Navigation = require('./Navigation.jsx');

const App = React.createClass({
  propTypes: {
    Actions: React.PropTypes.object.isRequired,
    Data: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <DocumentTitle title={this.props.Data.title}>
        <div className='app'>
          <Navigation
            Data={this.props.Data}
            Actions={this.props.Actions}
          />
          <div className='detail'>
            <RouteHandler 
              Data={this.props.Data}
              Actions={this.props.Actions}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;
