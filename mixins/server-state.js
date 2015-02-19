exports = module.exports = {
  getInitialState: function() {
    if (this.getServerState && this.props.__serverState) {
      return this.getServerState(this.props.__serverState);
    } else {
      return {};
    }
  }
};
