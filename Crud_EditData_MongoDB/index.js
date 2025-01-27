const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

const path = require('path');

const userModel = require('./models/userModel');

app.set('view engine', 'ejs');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('form');
});

app.post('/addUser', (req, res) => {
    const { name, price, pages, description, author } = req.body;

    userModel.create({
        bookName: name,
        bookPrice: price,
        bookPages: pages,
        bookDescription: description,
        bookAuthor: author

    }).then((record) => {
        console.log(record);
        console.log("Data successfully created..!");
        return res.redirect('/viewUser');
    }).catch((err) => {
        console.log(err);
        return res.send("Error in creating the user");
    })
})
app.get('/viewUser', (req, res) => {
    userModel.find()
        .then((records) => {
            console.log('User Added SuccessFully');
            return res.render('table', { records });
        })
        .catch((err) => {
            console.log(err);
            return res.send("Error in fetching the user");
        })
});

app.get('/deleteUser', (req, res) => {
    let id = req.query.dId;

    userModel.findByIdAndDelete(id)
        .then((dId) => {
            console.log(`Record deleted`);
            return res.redirect('/viewUser');
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/editUser', (req, res) => {
    userModel.findById(req.query.editId)
        .then((edit) => {
            return res.render('edit', {
                edit
            })
        })
})

app.post('/updateUser', (req, res) => {
    const { editId, name, price, pages, description, author } = req.body;

    userModel.findByIdAndUpdate(editId, {
        bookName: name,
        bookPrice: price,
        bookPages: pages,
        bookDescription: description,
        bookAuthor: author
    }).then((edit) => {
        console.log(edit);
        return res.redirect('/viewUser');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is Running on http://localhost:${port}`);
})