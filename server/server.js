const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const productController = require('./controllers/productController.js');

const app = express();

const PORT = 3000;

const mongoURI =
  process.env.NODE_ENV === 'test'
    ? 'mongodb://localhost/shopper_world'
    : 'mongodb://localhost/shopper_world';
mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  console.log('Hello world');
  console.log(product);
});

app.post('/create', productController.addProduct, (req, res) => {
  console.log('Hello world');
});

app.get('/all', productController.getAllProduct, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.export = app;
