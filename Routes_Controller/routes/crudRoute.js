const express = require('express');

const { viewPage, addPage } = require("../controller/indexController");

const routes = express.Router();

routes.get('/', viewPage);

routes.get('/add', addPage);

module.exports = routes;



