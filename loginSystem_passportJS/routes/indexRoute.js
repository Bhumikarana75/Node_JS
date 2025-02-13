const express = require('express');

const routes = express.Router();

routes.use('/',require('./authRoute'));

const passport = require('passport');

module.exports = routes;