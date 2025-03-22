const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const users = mongoose.model("userlogin", userSchema);

const productSchema = mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
})

const product = mongoose.model('product', productSchema);

module.exports = { 
    users, 
    product 
}