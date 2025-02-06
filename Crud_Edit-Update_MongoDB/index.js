const express = require('express');

const port = 8080;

const app = express();

const db = require('./config/db');

app.use(express.urlencoded({ extended: true }));

const userModel = require('./model/userModel');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('add');
})

app.get('/viewUser', (req, res) => {
    userModel.find({})
        .then((key) => {
            return res.render('view', {
                key
            })
        }).catch((err) => {
            console.log(err);
            return false;
        });
})

app.post('/addUser', (req, res) => {
    const { name, email, password } = req.body;

    userModel.create({
        userName: name,
        userEmail: email,
        userPassword: password
    })
        .then((key) => {
            console.log('user created');
            return res.redirect('/viewUser');
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
});

app.get('/deleteUser', (req, res) => {
    let id = req.query.dId;

    userModel.findByIdAndDelete(id)
        .then((delData) => {
            console.log('user Deleted');
            return res.redirect('/viewUser');
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
});

app.get('/editUser', (req, res) => {
    let id = req.query.eId;

    userModel.findById(id)
        .then((single) => {
            console.log('Data Fetched');
            return res.render('edit', {
                single
            })
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
});

app.post('/updateUser', (req, res) => {
    const { eId, name, email, password } = req.body;

    userModel.findById(eId)
        .then((single) => {
            userModel.findByIdAndUpdate(eId, {
                userName : name,
                userEmail : email,
                userPassword : password
            })
            .then(() => {
                console.log('user Updated');
                return res.redirect('/viewUser');
            })
            .catch((err) => {
                console.log(err);
                return false;
            })
        })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port: http://localhost:${port}`);
})