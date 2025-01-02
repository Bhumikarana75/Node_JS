const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded());

let record = [];

app.get('/', (req, res) => {
    return res.render('table', {
        record
    });
});

app.get('/add', (req, res) => {
    return res.render('add');
});

app.post('/adduser', (req, res) => {
    const { username, usertask, userstatus, userdeadline } = req.body;
    let obj = {
        id: Math.floor(Math.random() * 10000),
        username,
        usertask,
        userstatus, 
        userdeadline
    };
    record.push(obj);
    console.log("Successfully added..!");
    return res.redirect('/');
});

app.get('/edituser', (req, res) => {
    let id = req.query.editId;
    let singleData = record.find(val => val.id == id);
    return res.render('edit', {
        singleData
    })
})

app.post('/editData', (req, res) => {
    const { editId, username, usertask, userstatus, userdeadline } = req.body;
    let up = record.map((val) => {
        if (val.id == editId) {
            val.username = username;
            val.usertask = usertask;
            val.userstatus = userstatus;
            val.userdeadline = userdeadline;
        }
        return val;
    });
    record = up;
    console.log("Successfully updated..!");
    return res.redirect('/');
});

app.get('/deleteUser', (req, res) => {
    const { delId } = req.query;
    record = record.filter(user => user.id != delId); // Remove user by id
    console.log("User deleted successfully!");
    return res.redirect('/'); // Redirect back to the main page
});

app.listen(port, (err) => {
    if (err) {
        console.log('Error in running the server', err);
    }
    console.log(`Server is running on port http://localhost:8080`);
})