const Product = require('../models/productModel');

const productController = {};

productController.addProduct = async (req, res, next) => {
  try {
    // console.log(req.body.itemprice);
    const newProduct = await Product.create({
      fileName: req.file.filename,
      filePath: req.file.path,
      productName: req.body.productname,
      productPrice: req.body.itemprice,
      sellerName: req.body.sellername,
    });
    console.log(newProduct);
    res.redirect('http://localhost:8080/');
    return next();
  } catch (err) {
    const error = {
      log: 'addProduct ran into an error',
      message: { err: 'Error: Incorrect data received' },
    };
    return next(error);
  }
};

productController.getAllProduct = async (req, res, next) => {
  const result = await Product.find({});
  res.locals.result = result;
  return next();
};

module.exports = productController;
