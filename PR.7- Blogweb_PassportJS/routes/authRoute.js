const express = require('express');
const { registerPage, loginPage, registerUser, dashboardPage, loginUser, logoutUser, addBlogPage, viewBlogPage, addBlogData, deleteBlogData, editBlogData, updateBlogData, contactPage, blogView } = require('../controllers/authController');

const routes = express.Router();

const multer = require('multer');

const passport = require('passport');

routes.get('/register', registerPage);
routes.get('/', loginPage);
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.post('/registeruser', registerUser);
routes.get('/dashboard', passport.checkUserLogin, dashboardPage);
routes.get('/logoutuser', passport.checkUserLogin, logoutUser);

routes.get('/addblogpage', passport.checkUserLogin, addBlogPage);
routes.get('/viewblogpage', passport.checkUserLogin, viewBlogPage);

routes.get('/blogView', passport.checkUserLogin, blogView);
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

routes.post('/addblogdata', fileUpload, passport.checkUserLogin, addBlogData);

routes.get('/deletedata', passport.checkUserLogin, deleteBlogData);
routes.get('/editblogdata', passport.checkUserLogin, editBlogData);

routes.post('/updateblogdata', fileUpload, passport.checkUserLogin, updateBlogData)

module.exports = routes;