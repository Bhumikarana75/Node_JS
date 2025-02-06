const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

const path = require('path');

app.set('view engine', "ejs");

const userModel = require('./models/userModel');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('add')
});

app.get('/viewUser', (req, res) => {
    userModel.find({})
        .then((key) => {
            return res.render('view', {
                key
            });
        }).catch((err) => {
            console.log(err);
            return false;
        })
});

app.post('/addUser', (req, res) => {
    const { name, email, phone, city, gender, hobby } = req.body;
    userModel.create({
        userName: name,
        userEmail: email,
        userPhone: phone,
        userGender: gender,
        userCity: city,
        userHobby: hobby
    })
        .then((key) => {
            console.log(key);
            return res.redirect('/viewUser');
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/deleteUser', (req, res) => {
    let id = req.query.deleteId;

    userModel.findByIdAndDelete(id)
        .then(() => {
            console.log(`data Deleted`);
            return res.redirect('/viewUser');
        }).catch((err) => {
            console.log(err);
            return false;
        })
});

app.get('/editUser', (req, res) => {
    let id = req.query.editId;

    userModel.findById(id)
        .then((single) => {
            console.log(`user Edited`);
            return res.render('edit', {
                single
            })
        }).catch((err) => {
            console.log(err);
            return false;
        });
});

app.post('/updateUser', (req, res) => {
    const { editId, name, email, phone, gender, city, hobby } = req.body;

    userModel.findById(editId)
        .then(() => {
            userModel.findByIdAndUpdate((editId), {
                userName: name,
                userEmail: email,
                userPhone: phone,
                userGender: gender,
                userCity: city,
                userHobby: hobby
            })
                .then((key) => {
                    console.log(`User Updated`);
                    return res.redirect('/viewUser');
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                })
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
});

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`);
        return false;
    }
    console.log(`Server is running on port: http://localhost:${port}`);
})