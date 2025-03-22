const express = require('express');
const { registerPage, loginPage, registerUser, loginUser, logoutUser, addproductPage, viewproductPage, addproductData, deleteproductData, editproductData, updateproductData, contactPage } = require('../controllers/authController');

const routes = express.Router();

const multer = require('multer');

const passport = require('passport');

routes.get('/register', registerPage);
routes.get('/', loginPage);
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.post('/registeruser', registerUser);
routes.get('/logoutuser', passport.checkUserLogin, logoutUser);

routes.get('/addproductpage', passport.checkUserLogin, addproductPage);
routes.get('/viewproductpage', passport.checkUserLogin, viewproductPage);

routes.get('/contact', passport.checkUserLogin, contactPage);

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Math.floor(Math.random() * 1000000)}`);
    }
})
const fileUpload = multer({ storage: st }).single('image');

routes.post('/addproductdata', fileUpload, passport.checkUserLogin, addproductData);

routes.get('/deletedata', passport.checkUserLogin, deleteproductData);
routes.get('/editproductdata', passport.checkUserLogin, editproductData);

routes.post('/updateproductdata', fileUpload, passport.checkUserLogin, updateproductData)

module.exports = routes;