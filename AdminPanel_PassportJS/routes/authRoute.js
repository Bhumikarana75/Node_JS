const express = require('express');

const { registerPage, loginPage, loginUser, registeruser, dashPage, logOutUser } = require('../controllers/authController');

const routes = express.Router();

const passport = require('passport');

routes.get('/register', registerPage);
routes.get('/', loginPage);
routes.post('/loginUser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.post('/registeruser', registeruser);
routes.get('/dashboard', passport.checkUser, dashPage);
routes.get('/logOut', logOutUser)

module.exports = routes;