const express = require('express');

const { productAdd, productView } = require('../controller/productController');

const routes = express.Router();

routes.get('/', productView);
routes.get('/add', productAdd);

module.exports = routes;



