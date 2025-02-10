const express = require('express');

const port = 8800;

const app = express();

app.listen(port, (err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`http://localhost:${port}`);
})