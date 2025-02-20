const passport = require('passport');

const passportLocal = require('passport-local').Strategy; 

const { userModel } = require('../models/userModel');

passport.use(new passportLocal({
    'usernameField': "email"
}, async (email, password, done) => {
    try {
        let user = await userModel.findOne({ email: email });
        if (!user || user.password != password) {
            console.log(`not valid email or password`);
            return done(null, false);
        }
        console.log(user);
        return done(null, user);
    } catch (err) {
        console.log(err);
        return done(null, false);
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        let user = await userModel.findById(id);
        return done(null, user);
    }
    catch (err) {
        console.log(err);
        return done(null, false);
    }
});

passport.checkUser = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    return next();
};

passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.user = req.user
    }
    return next();
};

module.exports = passport; //5