// zxta rvhx cjvn wntx

const adminModel = require('../model/adminModel');

const loginPage = (req, res) => {
    console.log("done");
    
    if(res.locals?.users){
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const registerPage = (req, res) => {
    return res.render('register');
}

const loginUser = async (req, res) => {
    try {
        return res.redirect('/dashboard');
    } catch (err) { 
        console.log(err);
        return false;
    }
}

const registeruser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        await adminModel.create({
            name: name,
            email: email,
            password: password
        });

        console.log('data registered !');
        return res.redirect('/')

    } catch (err) {
        console.log(err);
        return false;
    }
}

const dashPage = (req, res) => {
    return res.render('dashboard');
}

const logOutUser = (req,res) => {
    req.logout((err) => {
        if(err) {
            console.log(err);
            return false;
        }
        return res.redirect('/');
    })
}

const forgetPassword = (req,res) =>{
    const {email} = req.body;
    console.log(req.body);
    console.log(email);
    
}

module.exports = {
    loginPage,
    registerPage,
    registeruser,
    dashPage,
    loginUser,
    logOutUser,
    forgetPassword
}