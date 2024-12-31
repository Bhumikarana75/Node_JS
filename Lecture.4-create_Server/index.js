const http = require('http');
const port = 8000;

const server = http.createServer((req,res) => {
    res.write(`<h1>Hello World</h1>`);
    res.write(`<h4>Server is created with Node JS !</h4>`);
    console.log("Request received");
    res.end();
})

server.listen(port, (err) =>{
    if(!err){
        console.log("Server is running on port: ", port);
    }
})