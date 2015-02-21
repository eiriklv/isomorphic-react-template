'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const RouteHandler = Router.RouteHandler;
const Navigation = require('./Navigation.jsx');

const App = React.createClass({
  mixins: [Router.State],

  propTypes: {
    State: React.PropTypes.shape({
      App: React.PropTypes.shape({
        data: React.React.PropTypes.object,
        error: React.React.PropTypes.object,
        isLoading: React.React.PropTypes.boolean
      }),
      Alerts: React.PropTypes.shape({
        data: React.React.PropTypes.object,
        error: React.React.PropTypes.object,
        isLoading: React.React.PropTypes.boolean
      }),
      Todos: React.PropTypes.shape({
        data: React.React.PropTypes.object,
        error: React.React.PropTypes.object,
        isLoading: React.React.PropTypes.boolean
      }),
    }),
    Actions: React.PropTypes.shape({
      AddTodo: React.PropTypes.function,
      RemoveTodo: React.PropTypes.function,
      CompleteTodo: React.PropTypes.function,
      DismissAlert: React.PropTypes.function,
      DismissAllAlerts: React.PropTypes.function
    })
  },

  render: function() {
    let State = this.props.State;
    let Actions = this.props.Actions;

    return (
      <DocumentTitle title={State.App.data.title}>
        <div className='app'>
          <Navigation
            State={State}
            Actions={Actions}
          />
          <div className='detail'>
            <RouteHandler 
              State={State}
              Actions={Actions}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;
