'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const RouteHandler = Router.RouteHandler;
const Navigation = require('./Navigation.jsx');
const AuthMixin = require('../mixins/auth');

const App = React.createClass({
  mixins: [AuthMixin],

  contextTypes: {
    Router: React.PropTypes.any,
    RouterState: React.PropTypes.object,
    Stores: React.PropTypes.object,
    Actions: React.PropTypes.object
  },

  propTypes: {
    State: React.PropTypes.shape({
      App: React.PropTypes.shape({
        data: React.PropTypes.object,
        error: React.PropTypes.object,
        isLoading: React.PropTypes.boolean
      }),
      Alerts: React.PropTypes.shape({
        data: React.PropTypes.array,
        error: React.PropTypes.object,
        isLoading: React.PropTypes.boolean
      }),
      Places: React.PropTypes.shape({
        data: React.PropTypes.array,
        error: React.PropTypes.object,
        isLoading: React.PropTypes.boolean
      }),
      User: React.PropTypes.shape({
        data: React.PropTypes.object,
        error: React.PropTypes.object,
        isLoading: React.PropTypes.boolean
      })
    })
  },

  render: function() {
    let State = this.props.State;

    return (
      <DocumentTitle title={State.App.data.title}>
        <div className='app'>
          <Navigation
            State={State}
          />
          <div className='detail'>
            <RouteHandler 
              State={State}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;
