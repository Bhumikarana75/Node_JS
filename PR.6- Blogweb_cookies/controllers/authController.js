const userModel = require('../models/userModel')

const fs = require('fs');

const registerPage = (req, res) => {
    return res.render('register');
}

const loginPage = (req, res) => {
    if (req.cookies?.auth) {
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const contactPage = (req, res) => {
    return res.render('contact')
};

const blogView = (req, res) => {
    return res.render('blog');
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.users.findOne({ email: email });

        if (!user || user.password != password) {
            console.log(`Email Or Password is incorrect`);
            return res.redirect('/');
        }

        res.cookie('auth', user);
        return res.redirect('/dashboard');
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
        console.log("Data added..!");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const dashboardPage = (req, res) => {
    return res.render('dashboard');
}

const addBlogPage = (req, res) => {
    return res.render('add');
}

const viewBlogPage = async (req, res) => {
    try {
        return res.render('view', {
            allBlogs: await userModel.blog.find(),
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addBlogData = async (req, res) => {
    try {
        const { name, title, description } = req.body;
        console.log(name);
        console.log(title);
        console.log(description);
        console.log(req.file);

        await userModel.blog.create({
            name: name,
            title: title,
            description: description,
            img: req.file?.path
        })
        console.log(`Data Successfully added..!`);
        return res.redirect('/viewblogpage');

    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteBlogData = async (req, res) => {
    try {
        let single = await userModel.blog.findById(req.query.delId)
        fs.unlinkSync(single?.img);

        await userModel.blog.findByIdAndDelete(req.query.delId);
        console.log(`Data Successfully deleted..!`);
        return res.redirect('/viewblogpage');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editBlogData = async (req, res) => {
    try {
        return res.render('edit', {
            oneRow: await userModel.blog.findById(req.query.editId)
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateBlogData = async (req, res) => {
    try {
        const { editId, name, title, description } = req.body;

        if (req.file) {
            let oneRow = await userModel.blog.findById(editId);
            fs.unlinkSync(oneRow?.img);
            await userModel.blog.findByIdAndUpdate(editId, {
                name: name,
                title: title,
                description: description,
                img: req.file?.path
            })
            console.log("Data Successfully updated..!");
            return res.redirect('/viewblogpage');
        } else {
            await userModel.blog.findByIdAndUpdate(editId, {
                name: name,
                title: title,
                description: description,
                img: req.file?.path
            })
            console.log("Data Successfully updated..!");
            return res.redirect('/viewblogpage');
        }
    } catch (err) {
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
    addBlogPage,
    viewBlogPage,
    addBlogData,
    deleteBlogData,
    editBlogData,
    updateBlogData,
    contactPage,
    blogView
}