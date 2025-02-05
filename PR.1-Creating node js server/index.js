const http = require('http');
const fs = require('fs');
const port = 8080;
const server = http.createServer((req, res) => {
    let fileName = "";

    switch (req.url) {
        case '/':
            fileName = './home.html';
            break;
        case '/ab':
            fileName = './about.html';
            break;
        case '/con':
            fileName = './contact.html';
            break;
        
    }
    fs.readFile(fileName, (err, pagename) => {
        if (err) {
            console.log(`File is Not Found !`);
            return false;
        }
        res.end(pagename) 
    })
})
server.listen(port, (err) => {
    if (!err) {
        console.log(`server is start on port:- ${port}`);
    } else {
        console.error('Error starting server:', err);
    }
})

