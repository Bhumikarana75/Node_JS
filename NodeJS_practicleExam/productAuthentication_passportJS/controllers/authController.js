const userModel = require('../models/userModel')

const fs = require('fs');

const registerPage = (req, res) => {
    return res.render('register');
}

const loginPage = (req, res) => {
    console.log("done");
    
    if (res.locals?.users) {
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const contactPage = (req, res) => {
    return res.render('contact')
};

const productView = (req, res) => {
    return res.render('product');
}

const loginUser = async (req, res) => {
    try {
        return res.redirect('/viewproductpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const registerUser = async (req, res) => {
    try {   
        const { name, email, password } = req.body;

        await userModel.users.create({
            name: name,
            email: email,
            password: password
        });
        console.log("Data registered..!");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const dashboardPage = (req, res) => {
    return res.render('dashboard');
}

const addproductPage = (req, res) => {
    return res.render('add');
}

const viewproductPage = async (req, res) => {
    try {
        return res.render('view', {
            allproducts: await userModel.product.find(),
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addproductData = async (req, res) => {
    try {
        const { name, title, description } = req.body;
        console.log(req.body);

        await userModel.product.create({
            name: name,
            title: title,
            description: description,
            img: req.file?.path
        })
        console.log(`Data Successfully added..!`);
        return res.redirect('/viewproductpage');

    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteproductData = async (req, res) => {
    try {
        let single = await userModel.product.findById(req.query.delId)
        fs.unlinkSync(single?.img);

        await userModel.product.findByIdAndDelete(req.query.delId);
        console.log(`Data Successfully deleted..!`);
        return res.redirect('/viewproductpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editproductData = async (req, res) => {
    try {
        return res.render('edit', {
            oneRow: await userModel.product.findById(req.query.editId)
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateproductData = async (req, res) => {
    try {
        const { editId, name, title, description } = req.body;

        if (req.file) {
            let oneRow = await userModel.product.findById(editId);
            fs.unlinkSync(oneRow?.img);
            await userModel.product.findByIdAndUpdate(editId, {
                name: name,
                title: title,
                description: description,
                img: req.file?.path
            })
            console.log("Data Successfully updated..!");
            return res.redirect('/viewproductpage');
        } else {
            await userModel.product.findByIdAndUpdate(editId, {
                name: name,
                title: title,
                description: description,
                img: req.file?.path
            })
            console.log("Data Successfully updated..!");
            return res.redirect('/viewproductpage');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logoutUser = (req, res) => {
    req.logout((err)=>{
        if(err){
            console.log(err);
            return false;
        }
    return res.redirect('/');

    })
}

module.exports = {
    registerPage,
    loginPage,
    loginUser,
    registerUser,
    dashboardPage,
    logoutUser,
    addproductPage,
    viewproductPage,
    addproductData,
    deleteproductData,
    editproductData,
    updateproductData,
    contactPage,
    productView
}