const express = require('express');

const routes = express.Router();

const { registerPage, loginPage, registerUser, dashboardPage, loginUser, logoutUser, addPage, viewPage, addData } = require('../controller/authController');

const passport = require('passport');

routes.get('/register', registerPage);
routes.get('/', loginPage); 
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.post('/registeruser', registerUser);
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/logoutuser', logoutUser);
routes.get('/addPage', addPage);
routes.get('/viewPage', viewPage);
routes.get('/addData', addData);

module.exports = routes;