const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/crud_Practise`);

const db = mongoose.connection;
db.on('connected', (err) => {
    if (err) {
        console.log(`err`);
        return false;
    }
    console.log(`db is conected`);
    
})

module.exports = db;