const express = require('express');

const app = express();

const port = 8000;

const path = require('path');

app.set('view engine', 'ejs');

const db = require('./config/db');

const userModel = require('./models/userModel');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('form');
});

app.post('/addUser', (req, res) => {
    const { name, email, password } = req.body;
    userModel.create({
        userName: name,
        userEmail: email,
        userPassword: password
    }).catch(err => {
        console.log('Error in creating user', err);
        return;
    }).then(() => {
        return res.redirect('/');
    });
});

app.listen(port, (err) => {
    if (err) {
        console.log('Error in running the server', err);
        return;
    }
    console.log(`Server is running at http://localhost:${port}`);
});