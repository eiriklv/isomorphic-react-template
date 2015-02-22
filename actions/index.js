exports = module.exports = function(StoresInstances, routerState) {
  return {
    AddPlace: require('./add-place')(StoresInstances, routerState),
    RemovePlace: require('./remove-place')(StoresInstances, routerState)
  };
};
