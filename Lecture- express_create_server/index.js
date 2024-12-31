const express = require('express');
const port = 8000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Home route accessed");
    return res.render('home');
});
app.get('/p', (req, res) => {
    console.log("Product route accessed");
    return res.render('product');
});
app.get('/c', (req, res) => {
    console.log("Contact route accessed");
    return res.render('contact');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port:- ${port}`);
});