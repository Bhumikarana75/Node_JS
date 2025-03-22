const userModel = require('../models/userModel')

const registerPage = (req, res) => {
    return res.render('register');
}

const loginPage = (req, res) => {
    if (res.locals?.user) {
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const loginUser = async (req, res) => {
    try{
        console.log(`findOne`);
        return res.redirect('/dashboard');
    }catch(err){
        console.log(err);
        return false;
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        await userModel.create({
            name: name,
            email: email,
            password: password
        });
        console.log("User Registered..!");
        return res.redirect('/');

    } catch (err) {
        console.log(err);
        return false;
    }
}

const dashboardPage = (req, res) => {
    // if(!req.cookies?.auth){
    //     return res.redirect('/');
    // }
    return res.render('dashboard');
}

const addPage = (req,res) => {
    return res.render('add');
} 

const viewPage = async (req,res) => {
    try{
        return res.render('view', {
            viewUser : await userModel.users.find()
        })
    }catch(err){
        console.log(err);
        return false;
    }
}

const addData = async (req,res) => {
    try{
        const {email,password,name } = req.body;
        console.log(name);
        console.log(email);
        console.log(password);
        
        await userModel.users.create({
            name:name,
            email:email,
            password:password
        })
        console.log('user Added !');
        return res.redirect('/viewPage')
        
    }catch (err){
        console.log(err);
        return false;
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('auth');
    return res.redirect('/');
}

module.exports = {
    registerPage,
    loginPage,
    loginUser,
    registerUser,
    dashboardPage,
    logoutUser,
    addPage,
    viewPage,
    addData
}