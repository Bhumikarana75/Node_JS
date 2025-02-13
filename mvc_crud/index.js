const express = require('express');

const port = 8800;

const app = express();

app.set('view engine' , 'ejs');

const db = require('./config/db');

app.use(express.urlencoded());

const userModel = require('./models/userModel');    

app.use('/', require('./routes/authRoute')) // auth route attach

app.get('/', (req,res) => { // login page render
    return res.render('login');
})

app.listen(port, (err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`http://localhost:${port}`);
})