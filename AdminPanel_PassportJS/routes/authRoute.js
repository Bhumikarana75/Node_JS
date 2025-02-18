const express = require('express');

const { registerPage, loginPage, loginUser } = require('../controllers/authController');

const routes = express.Router();

routes.get('/register', registerPage);

routes.get('/', loginPage);

routes.post('/loginuser', loginUser)

module.exports = routes;