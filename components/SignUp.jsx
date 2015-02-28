'use strict';

const React = require('react');
const DocumentTitle = require('react-document-title');
const Router = require('react-router');
const Link = Router.Link;

const SignUp = React.createClass({
  contextTypes: {
    Flux: React.PropTypes.object.isRequired,
    RouterState: React.PropTypes.object.isRequired
  },

  attemptSignUp: function(e) {
    e.preventDefault();

    this.context.Flux.Actions.AttemptSignUp({
      email: this.refs.email.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    });
  },

  render: function() {
    return (
      <DocumentTitle title={'Signup'}>
        <div className='app'>
          <h1>Signup page</h1>

          <div>
            <label>{'Email: '}</label>
            <input
              type='email'
              ref='email'
              defaultValue={''}
            />
            <br />
            <label>{'Password: '}</label>
            <input
              type='password'
              ref='password'
              defaultValue={''}
            />
            <br />
            <button
              onClick={this.attemptSignUp}>
              Sign up
            </button>
          </div>

          <Link to='landing'>
            {'Go back to landing!'}
          </Link>

          <br />

          <Link to='login'>
            {'Go to login!'}
          </Link>

        </div>
      </DocumentTitle>
    );
  }
});

module.exports = SignUp;
