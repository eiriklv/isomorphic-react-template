'use strict';

const React = require('react');
const DocumentTitle = require('react-document-title');
const Router = require('react-router');
const Link = Router.Link;

const Landing = React.createClass({
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
