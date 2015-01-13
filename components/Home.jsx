import React from 'react';
import IntlMixin from 'react-intl';
import { StoreMixin } from 'fluxible';
import PhotosStore from '../stores/PhotosStore';
import moment from 'moment';

const Home = React.createClass({
  mixins: [StoreMixin, IntlMixin],
  
  statics: {
    storeListeners: [PhotosStore]
  },

  getInitialState() {
    return this.getStore(PhotosStore).getState();
  },

  onChange() {
    const state = this.getStore(PhotosStore).getState();
    this.setState(state);
  },

  render() {
    return (
      <div>
        <p>{ this.getIntlMessage('home.welcome') }</p>
        { this.formatNumber(100.95) }
        <p>{ moment().format('LL') }</p>
        <div className="home__thumbs">
          { 
            this.state.photos.map((photo, i) => {
              return <img key={i} src={photo.image_url} />;
            })
          }
        </div>
      </div>
    );
  }
});

export default Home;