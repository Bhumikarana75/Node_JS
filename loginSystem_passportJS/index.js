const express = require('express');

const port = 9000;

const app = express();

app.set('view engine', 'ejs');

const db = require('./config/db');

// const cookieparser = require('cookie-parser');
// app.use(cookieparser());

// passport authentication start 

const passport = require('passport'); //1

const passportLocal = require('./config/passportLocal'); //2

const session = require('express-session'); //3

app.set(passport.setuser);

app.use(session({
    name: 'bhumika',
    secret: 'rnw',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);


// passport authentication end 

app.use(express.urlencoded());

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- http://localhost:${port}`);
});