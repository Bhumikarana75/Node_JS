const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const path = require('path');

app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname, ('public'))));

app.use(express.urlencoded());

const cookieparser = require('cookie-parser');
app.use(cookieparser());

//passpport js start

const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');

app.use(session({
    name : 'bhumika',
    secret : 'rnw',
    resave : true,
    saveUninitialized : true,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24 * 7
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

//passpport js end

app.use('/', require('./routes/indexRoute'));   


app.listen(port, (err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is Running on port: http://localhost:${port}`);
    
})