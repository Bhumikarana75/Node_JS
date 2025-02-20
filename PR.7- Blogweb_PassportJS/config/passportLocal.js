const passport = require('passport');

const passportLocal = require('passport-local').Strategy;
const usersModel = require('../models/userModel')

passport.use(new passportLocal({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        let user = await usersModel.users.findOne({ email: email });
        if (!user || user.password != password) {
            return done(null, false, { message: 'Invalid email or password' });
        }
        console.log(user);
        return done(null, user);
    } catch (err) {
        console.log(err);
        return false;
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    try {
        let user = await usersModel.users.findById(id);
        return done(null, user);
    } catch (err) {
        console.log(err);
        return done(null, err);
    }
})

passport.checkUserLogin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    return next();
}

passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.users = req.users;
    }
    return next();
}