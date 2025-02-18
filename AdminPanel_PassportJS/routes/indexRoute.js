const express = require('express');

const route = express.Router();

route.use('/', require('./authRoute'));

module.exports = route;