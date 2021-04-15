const productModel = require('../Model/productsSchema');


exports.Validateuserame = function (name) {
  if (name == null) {
      return false;
  }
  return true;
};