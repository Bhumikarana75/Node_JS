const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type: "string",
        required: true
    },
    userEmail: {
        type: "string",
        required:true
    },
    userPhone: {
        type: "string",
        required:true
    },
    userGender:{
        type: String,
        required: true
    },
    userCity:{
        type: String,
        required: true
    },
    userHobby:{
        type: Array,
        required: true
    },
    userImage:{
        type:String,
        required: true
    }
});

const users = mongoose.model('users', userSchema);

module.exports = users;