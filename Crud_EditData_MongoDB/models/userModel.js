const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required : true
    },
    bookPrice : {
        type : String,
        required : true
    },
    bookPages : {
        type : String,
        required : true
    },
    bookDescription : {
        type : String,
        required : true
    },
    bookAuthor : {
        type : String,
        required : true
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;