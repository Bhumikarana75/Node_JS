const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userDB');

const db = mongoose.connection;
db.on('error', (err) => {
    if(err){
        console.log('Error in connecting to database', err);
    }
   
    console.log('Connected to database');
});
module.exports = db;