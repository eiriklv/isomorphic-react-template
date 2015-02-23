'use strict';

const React = require('react');
const DocumentTitle = require('react-document-title');
const Router = require('react-router');
const Link = Router.Link;

const Landing = React.createClass({
  contextTypes: {
    Route: React.PropTypes.object,
    Actions: React.PropTypes.shape({
      AddPlace: React.PropTypes.function,
      RemovePlace: React.PropTypes.function,
      DismissAlert: React.PropTypes.function,
      DismissAllAlerts: React.PropTypes.function
    })
  },

  propTypes: {
    State: React.PropTypes.shape({
      App: React.PropTypes.shape({
        data: React.PropTypes.object,
        error: React.PropTypes.object,
        isLoading: React.PropTypes.boolean
      })
    })
  },

  statics: {
    willTransitionTo: function(transition, params, query, done) {
      console.log('will transition to Landing');
      done();
    }
  },

  render: function() {
    return (
      <DocumentTitle title={'Landing'}>
        <div className='app'>
          <h1>Landing Page</h1>
          <Link to='places'>
            {'Go the the app'}
          </Link>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Landing;
