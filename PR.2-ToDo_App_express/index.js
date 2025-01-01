const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    return res.render('add.ejs');
})

app.listen(port, (err) => {
    if(err){
        console.log('Error in running the server', err);
    }
    console.log(`Server is running on port https://localhost:${port}`);
})