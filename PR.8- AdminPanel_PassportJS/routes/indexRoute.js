const express = require('express');

const route = express.Router();

route.use('/', require('./authRoute'));
route.use('/category', require('./categoryRoute'));
route.use('/subcategory', require('./subCategoryRoute'));

module.exports = route;