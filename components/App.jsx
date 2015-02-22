'use strict';

const React = require('react');
const Router = require('react-router');
const DocumentTitle = require('react-document-title');
const RouteHandler = Router.RouteHandler;
const Navigation = require('./Navigation.jsx');

const App = React.createClass({
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
