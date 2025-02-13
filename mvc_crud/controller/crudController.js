const userModel = require('../models/userModel');

const addCrud = (req,res) =>{ // crud add page attach
    return res.render('crud/add');
}

const viewCrud = async (req, res) => {
    try {
        let viewRec = await userModel.find({})
        return res.render('crud/view', {
            viewRec
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const insertUser = async(req,res) => {
    try{
        console.log(req.body);
        
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = {
    addCrud , viewCrud,insertUser
}