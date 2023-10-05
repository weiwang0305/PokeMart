const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// Multer
const multer = require('multer');

//setting options for multer
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, '/Users/wei/Documents/solo-project/server/images');
  },
  filename: (req, file, cb) => {
    // console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

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
app.use(express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  console.log('Hello world');
  console.log(product);
});

app.post(
  '/create',
  upload.single('image'),
  productController.addProduct,
  (req, res) => {
    console.log(req.file, req.body);
  }
);

app.get('/all', productController.getAllProduct, (req, res) => {
  res.status(200).json(res.locals.result);
});

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign(defaultErr, err);
//   console.log(errorObj.log);
//   res.status(errorObj.status).send(errorObj.message);
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.export = app;
