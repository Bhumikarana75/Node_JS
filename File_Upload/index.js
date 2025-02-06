const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

const path = require('path');

app.set('view engine', "ejs");

const userModel = require('./models/userModel');

app.use(express.urlencoded());

const multer = require('multer');

//file Upload :-

const fs = require('fs');

app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

const st = multer.diskStorage({
    destination : (req, res, cb) =>{
        cb(null,'uploads')
    },
    filename : (req,res,cb) => {
        let unique = Math.floor(Math.random() * 100000);
        cb(null, `${res.fieldname} - ${unique}`) //change res.fieldname
    }
})

const imgUpload = multer({storage : st}).single('img');

//file upload end

app.get('/', (req, res) => {
    return res.render('add')
});

app.get('/viewUser', (req, res) => {
    userModel.find({})
        .then((key) => {
            return res.render('view', {
                key
            });
        }).catch((err) => {
            console.log(err);
            return false;
        })
});

app.post('/addUser',imgUpload, (req, res) => {
    const { name, email, phone, city, gender, hobby } = req.body;
    userModel.create({
        userName: name,
        userEmail: email,
        userPhone: phone,
        userGender: gender,
        userCity: city,
        userHobby: hobby,
        userImage: req.file?.path
    })
        .then((key) => {
            console.log(key);
            return res.redirect('/viewUser');
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/deleteUser', (req, res) => {
    let id = req.query.deleteId;

    let single = userModel.findById(id);
     fs.unlinkSync(single?.userImage);

    userModel.findByIdAndDelete(id)
        .then(() => {
            console.log(`data Deleted`);
            return res.redirect('/viewUser');
        }).catch((err) => {
            console.log(err);
            return false;
        })
});

app.get('/editUser', (req, res) => {
    let id = req.query.editId;

    userModel.findById(id)
        .then((single) => {
            console.log(`user Edited`);
            return res.render('edit', {
                single
            })
        }).catch((err) => {
            console.log(err);
            return false;
        });
});

app.post('/updateUser',imgUpload, (req, res) => {
    const { editId, name, email, phone, gender, city, hobby } = req.body;

    if(req.file){   
        userModel.findById(editId)
            .then((singleRow) => {
                if (singleRow?.userImage) {
                    fs.unlinkSync(singleRow?.userImage);
                }
                userModel.findByIdAndUpdate(editId, {
                    username: name,
                    useremail: email,
                    userpassword: password,
                    userGender : gender,
                    userHobby : hobby,
                    userCity : city,
                    userImage : req.file?.path
                })
                .then((key) => {
                    console.log(`User Updated`);
                    return res.redirect('/viewUser');
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                })
            })
            .catch((err) => {
                console.log(err);
                return false;
            })
        
    }
    else{
        userModel.findById(editId)
        .then((singleRow) => {
            userModel.findByIdAndUpdate((editId), {
                userName: name,
                userEmail: email,
                userPhone: phone,
                userGender: gender,
                userCity: city,
                userHobby: hobby
            })
                .then((key) => {
                    console.log(`User Updated`);
                    return res.redirect('/viewUser');
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                })
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`);
        return false;
    }
    console.log(`Server is running on port: http://localhost:${port}`);
})