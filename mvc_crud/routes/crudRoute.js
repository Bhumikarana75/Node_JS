const express = require('express');

const { viewCrud, addCrud,insertUser } = require('../controller/crudController');

const routes = express.Router()

routes.get('/view', viewCrud); // view crud imported from controller
routes.get('/', addCrud); // add crud imported from controller

routes.post('/insertuser',insertUser)

module.exports = routes;