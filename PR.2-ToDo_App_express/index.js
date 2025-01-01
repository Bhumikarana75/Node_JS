const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded());
let record = [];


app.get('/', (req,res) => {
    return res.render('table',{
        record
    });
})
app.get('/add', (req,res) => {
    return res.render('add');
}); 

app.post('/adduser',(req,res) => {
    const {name, phone} = req.body;
    let obj = {
        username : name,
        userphone : phone
    }
    record.push(obj);
    console.log("Successfully added..!");
    return res.redirect('/');
})

app.listen(port, (err) => {
    if(err){
        console.log('Error in running the server', err);
    }
    console.log(`Server is running on port https://localhost:${port}`);
})