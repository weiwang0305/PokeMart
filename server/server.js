const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const productController = require('./controllers/productController.js');

const app = express();

const PORT = 8080;

mongoose.connect('mongodb://127.0.0.1:27017/test');

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/create', productController.addProduct, (req, res) => {
  console.log('Hello world');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.export = app;
