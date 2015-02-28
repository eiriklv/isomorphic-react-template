'use strict';

const React = require('react');
const DocumentTitle = require('react-document-title');
const Router = require('react-router');
const Link = Router.Link;

const SignUp = React.createClass({
  saveAndContinue: function(e) {
    e.preventDefault();

    var data = {
      email: this.refs.email.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    };

    console.log(data);
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
            <button onClick={this.saveAndContinue}>Save and Continue</button>
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
