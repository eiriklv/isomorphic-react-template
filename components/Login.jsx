'use strict';

const React = require('react');
const DocumentTitle = require('react-document-title');
const Router = require('react-router');
const Link = Router.Link;

const Login = React.createClass({
  contextTypes: {
    Flux: React.PropTypes.object.isRequired,
    RouterState: React.PropTypes.object.isRequired
  },

  attemptLogin: function(e) {
    e.preventDefault();

    this.context.Flux.Actions.AttemptLogin({
      email: this.refs.email.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    });
  },

  renderAlerts: function() {
    return this.props.State.Alerts.map(function(alert) {
      return <p>{alert.message}</p>
    });
  },

  render: function() {
    return (
      <DocumentTitle title={'Login'}>
        <div className='app'>
          <h1>Login page</h1>

          {this.renderAlerts()}

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
              onClick={this.attemptLogin}>
              Login
            </button>
          </div>

          <Link to='landing'>
            {'Go back to landing!'}
          </Link>

          <br />

          <Link to='signup'>
            {'Go to signup!'}
          </Link>

        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Login;
