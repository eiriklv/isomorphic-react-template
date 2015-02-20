exports = module.exports = function(StoresInstances) {
  return {
    AddPlace: require('./add-place')(StoresInstances),
    RemovePlace: require('./remove-place')(StoresInstances)
  };
};
