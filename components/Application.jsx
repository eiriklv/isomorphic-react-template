import React from 'react';
import { RouterMixin } from 'flux-router-component';
import { StoreMixin } from 'fluxible-app';

import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Page from './Page.jsx';
import Timestamp from './Timestamp.jsx';
import ApplicationStore from '../stores/ApplicationStore';
import I18nStore from '../stores/I18nStore';
import { assign } from 'lodash';
var Application = React.createClass({
  
  mixins: [RouterMixin, StoreMixin],

  statics: {
    storeListeners: {onChange: [ApplicationStore, I18nStore]}
  },

  getInitialState() {
    const appStoreState = this.getStore(ApplicationStore).getState();
    const i18nStoreState = this.getStore(I18nStore).getState();
    return assign({}, appStoreState, i18nStoreState);
  },
  
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.pageTitle === prevState.pageTitle) return;
    document.title = this.state.pageTitle;
  },

  onChange(stores) {
    const appStoreState = this.getStore(ApplicationStore).getState();
    const i18nStoreState = this.getStore(I18nStore).getState();
    this.setState(assign({}, appStoreState, i18nStoreState));
  },

  render() {
    require('../style/main.scss');
    const i18n = {
      messages: this.state.messages,
      locales: this.state.locales
    }
    var content = '';
    switch (this.state.currentPageName) {
      case 'home':
        content = <Home {...i18n} context={this.props.context} />;
        break;
      case 'about':
        content = <About/>;
        break;
      case 'page':
        content = <Page context={this.props.context}/>;
        break;
    }
    //render content
    return (
      <div>
         <Navigation selected={this.state.currentPageName} links={this.state.pages} context={this.props.context}/>

        { content }
        <Timestamp context={this.props.context}/>
      </div>
    );
  }

});

export default Application;