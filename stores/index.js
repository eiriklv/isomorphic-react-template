exports = module.exports = function(context) {
  return {
    Places: require('./places')(context.Places),
    User: require('./user')(context.User)
  };
};
