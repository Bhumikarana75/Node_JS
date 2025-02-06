const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/file_Upload');

const db = mongoose.connection;

db.on('connected',(err) => {

    if(err) {
        console.log('Error in connecting to Database :: MongoDB');
        return false;
    }
    console.log('Connected to Database !');

});

module.exports = db;
