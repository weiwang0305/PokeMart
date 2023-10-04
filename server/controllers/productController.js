const Product = require('../models/productModel');

const productController = {};

productController.addProduct = async (req, res, next) => {
  console.log(req.body);
  const newProduct = await Product.create({
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    sellerName: req.body.sellerName,
  });

  return next();
};

productController.getAllProduct = async (req, res, next) => {
  const result = await Product.find({});
  res.locals.result = result;
  return next();
};

module.exports = productController;
