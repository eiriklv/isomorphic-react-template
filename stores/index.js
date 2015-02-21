exports = module.exports = function(context) {
  return {
    Todos: require('./todos')(context.Todos),
    Alerts: require('./alerts')(context.Alerts)
  };
};
