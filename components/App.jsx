'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const RouteHandler = Router.RouteHandler;
const Navigation = require('./Navigation.jsx');

const App = React.createClass({
  mixins: [Router.State],

  propTypes: {
    Actions: React.PropTypes.object.isRequired,
    State: React.PropTypes.object.isRequired
  },

  componentWillUpdate: function() {
    // here we could tell the stores to refresh based on the route
    // - call an action to fill the store(s) with new data
    console.log(this.getParams());
  },

  render: function() {
    return (
      <DocumentTitle title={this.props.State.title}>
        <div className='app'>
          <Navigation
            State={this.props.State}
            Actions={this.props.Actions}
          />
          <div className='detail'>
            <RouteHandler 
              State={this.props.State}
              Actions={this.props.Actions}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;
