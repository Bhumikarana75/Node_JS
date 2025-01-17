const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/db')
const path = require('path')
app.set('view engine', 'ejs');

const userModel = require('./models/userModel');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('form');
});

app.post('/addUser', (req, res) => {
    const { name, email, password } = req.body;

    userModel.create({
        username: name,
        useremail: email,
        userpw: password,
    }).then((record) => {
        console.log(record);
        console.log(`User added successfully !!`);
        return res.render('form');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.get('/viewUser', (req, res) => {
    userModel.find({})
    .then((view) => {
        console.log(view);
        console.log(`User successfully added !`);
        return res.render('table', { view });
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.get('/deleteUser', (req,res) => {
    let id = req.query.dId;
    userModel.findByIdAndDelete(id)
    .then((dId) => {
        console.log(`Record deleted`);
        return res.redirect('/viewUser');
    }).catch((err) => {
        console.log(err);
        return false;
    })  
})

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on http://localhost:${port}`);

})