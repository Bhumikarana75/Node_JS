const express = require('express');
const app = express();
const port= 3000;

app.get('/', (req,res) => {
    res.write("<h1>Hello From MongoDb</h1>");
    res.end();
})

app.listen(port ,(err)=>{
    if(err){

        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on http://localhost:${port}`);    
})