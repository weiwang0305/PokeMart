const Product = require('../models/productModel');

const productController = {};

productController.addProduct = async (req, res, next) => {
  console.log(req.body);
  const newProduct = await Product.create();
  return next();
};

module.exports = productController;
