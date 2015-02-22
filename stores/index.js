exports = module.exports = function(context) {
  return {
    Places: require('./places')(context.Places),
    User: require('./user')(context.User),
    Alerts: require('./alerts')(context.Alerts),
    App: require('./app')(context.App)
  };
};
