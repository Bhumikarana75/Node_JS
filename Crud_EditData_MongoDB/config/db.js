const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo_Edit');

const db = mongoose.connection;

db.on('connected', (err) => {
    if (err) {
        console.log(`Error in connecting to the database: ${err}`);
    }
    console.log('Connected to the database');
})

module.exports = db;