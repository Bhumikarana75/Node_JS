const express = require('express');

const routes = express.Router();

const { registerPage, loginPage, registerUser, dashboardPage, aboutPage, contactPage, loginUser, logoutUser } = require('../controller/authController');

const passport = require('passport');

routes.get('/register', registerPage);
routes.get('/', loginPage); 
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.post('/registeruser', registerUser);
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/about', aboutPage);
routes.get('/contact', contactPage);
routes.get('/logoutuser', logoutUser);

module.exports = routes;