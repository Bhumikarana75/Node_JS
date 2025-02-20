const express = require('express');

const port = 8080;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const path = require('path');

app.use(express.static('public'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// const cookieparser = require('cookie-parser');
// app.use(cookieparser());

//passpport js :-

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
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);


//passport js end

app.use(express.urlencoded());

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- http://localhost:${port}`);
})