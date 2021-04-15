const productsModel = require('../Model/productsSchema');
const validators = require('../Utilities/validator');

exports.getproducts = async (res) => {
  try {
    const products = await productsModel.find({}, { _id: 0, __v: 0 });
    if (products .length > 0) {
      res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
          products,
        },
      });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No products available',
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.addproduct = async (req, res) => {
  try {
    const product = await productsModel.findOne(
      {name:  req.body.name}
    );
    if (validators.Validateuserame(product)) {
      res.status(201).json({
        message: 'Product already present'
         });
    } else {
      const newproduct = await productsModel.create(req.body);
      res.status(201).json({
        message: 'Product added with Name: '+req.body.name
         });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.errmsg,
    });
  }
};

exports.updateproduct = async (req, res) => {
  try {
    const product = await productModel.findOne(
      {name:  req.body.name}
    );
    if (validators.Validateuserame(product)) {
      const updateproduct = await productsModel.findOneAndUpdate(
        { name: req.body.name },
        req.body
      );
      res.status(201).json({
        message: "Product: "+updateproduct.name+" updated"
         });
    } else {
      res.status(201).json({
        message: "Product not available"
         });
      
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.errmsg,
    });
  }
};

exports.deleteproduct = async (req, res) => {
  const delDet = await productModel.deleteOne({ productName: req.params.product });
  if (delDet.deletedCount === 0) {
    res.status(404).json({
      message: "Product not available",
    });
  } else {
    res.status(200).json({
      message: "Product removed successfully",
    });
  }
};

exports.invalid = async (req, res) => {
  res.status(404).json({
    message: "Resource not found",
  });
};
