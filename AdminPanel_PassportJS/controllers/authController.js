const adminModel = require('../model/adminModel');

const loginPage = (req, res) => {
    return res.render('login');
}

const registerPage = (req,res) => {
    return res.render('register');
}

const loginUser = async (req,res) => {
    try{
        const { email, password } = req.body;
        const user = await userModel.users.findOne({ email : email });
        return res.redirect('/dashboard');
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    loginPage,
    registerPage,
    loginUser
}