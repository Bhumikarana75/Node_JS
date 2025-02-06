const express = require('express');
const port = 8080;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    return res.render('crud/view');
})

app.listen(port, (err) => {
    if(err){
        console.log('Error in running the server', err);
    }
    console.log(`server is running on http://localhost:${port}`);
})