const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const path = require('path');

app.use(express.static('public'));

app.use('/', express.static(path.join(__dirname, ('public'))));

app.use(express.urlencoded());

app.use('/', require('./routes/indexRoute'))

app.listen(port, (err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is Running on port: http://localhost:${port}`);
    
})