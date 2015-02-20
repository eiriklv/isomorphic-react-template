'use strict';

exports = module.exports = {
  __updateState: function(data) {
    if (!this.updateState) return;
    this.updateState(data);
  },

  componentWillMount: function() {
    for (let Store in this.props.Stores) {
      this.props.Stores[Store].on('update', this.__updateState);
    }
  },

  componentWillUnmount: function() {
    for (let Store in this.props.Stores) {
      this.props.Stores[Store].removeListener('update', this.__updateState);
    }
  }
};
