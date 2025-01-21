const express = require('express');
const port = 8000;
const app = express();


const path = require('path');
const db = require('./config/db');
const userModel = require('./models/userModel');


app.set('view engine', 'ejs');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('form');
});

app.post('/addUser', (req, res) => {
    const { name, email, password } = req.body;

    userModel.create({
        username: name,
        useremail: email,
        userpassword: password
    }).then((record) => {
        return res.render("user", { user: record });
    }).catch((err) => {
        console.log(err);
        return res.send("Error in creating the user");
    })
})
app.get('/viewUser', (req, res) => {
    userModel.find({})
        .then((view) => {
            console.log('User Added SuccessFully');
            return res.render('table', { view });
        })
        .catch((err) => {
            console.log(err);
            return res.send("Error in fetching the user");
        })
});

app.get('/deleteUser', (req, res) => {
    let id = req.query.dId;
    userModel.findByIdAndDelete(id)
        .then((dId) => {
            console.log(`Record deleted`);
            return res.redirect('/viewUser');
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
})

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is Running on http://localhost:${port}`);
})