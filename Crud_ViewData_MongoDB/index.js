const express = require('express');
const app = express();
const port= 8080;

const db = require('./config/db');
const path = require('path');

app.set('view engine', 'ejs');

const userModel = require('./models/userModel');

app.use(express.urlencoded());

//page show karava 
app.get('/',(req,res) => {
    return res.render('form');
});

app.get('/viewUser',(req,res) => {
    userModel.find({})
    .then((view)=>{
        console.log(view);
        console.log("User View Successfully");
        return res.render('table', {view});
    }).catch((err) =>{
        console.log(err);
        return false;
    })
})

//form na data lava mate
app.post('/addUser', (req,res) => {
    const {name, email, password} = req.body;

    //query to create/add user in db 
    userModel.create({
        username: name,
        useremail: email,
        userpassword: password
    })
    .then((record) => {
        console.log(record);
        console.log("User Created Successfully");
        return res.redirect('/');
    }).catch((err) =>{
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is Running on port http://localhost:${port}`);
});
