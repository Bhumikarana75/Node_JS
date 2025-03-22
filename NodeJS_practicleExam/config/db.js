const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/exam2025");

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('DataBase is connected successfully ');

});

module.exports = db;