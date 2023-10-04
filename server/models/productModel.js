const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: { type: String, required: true, unique: true },
  productPrice: { type: Number, required: true },
  sellerName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('product', productSchema);
