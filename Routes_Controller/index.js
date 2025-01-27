const express = require('express');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./routes/indexRoutes'));

app.listen(port, (err) => {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on http://localhost:${port}`);
})
