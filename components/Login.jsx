'use strict';

const React = require('react');
const DocumentTitle = require('react-document-title');
const Router = require('react-router');
const Link = Router.Link;

const Login = React.createClass({
  render: function() {
    return (
      <DocumentTitle title={'Login'}>
        <div className='app'>
          <h1>Login page</h1>
          <Link to='places'>
            {'Login!'}
          </Link>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Login;
