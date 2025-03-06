const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    status:{
        type:String,
        default:'active'
    }
});

const category = mongoose.model('category', categorySchema);
module.exports = category;
