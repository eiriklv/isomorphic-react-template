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

  attemptSignup: function(e) {
    e.preventDefault();

    this.context.Flux.Actions.AttemptSignup({
      email: this.refs.email.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    });
  },

  dismissAlerts: function(e) {
    e.preventDefault();

    this.context.Flux.Actions.DismissAlerts();
  },

  renderAlerts: function() {
    return this.props.State.Alerts.map(function(alert) {
      return <p key={alert.id}>{alert.message}</p>
    });
  },

  render: function() {
    return (
      <DocumentTitle title={'Signup'}>
        <div className='app'>
          <h1>Signup page</h1>

          <div onClick={this.dismissAlerts}>
            {this.renderAlerts()}
          </div>

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
              onClick={this.attemptSignup}>
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
