const http = require('http');
const fs = require('fs');
const port = 8000;
const server = http.createServer((req, res) => {
    let fileName = "";

    switch (req.url) {
        case '/':
            fileName = './home.html';
            break;
        case '/ab':
            fileName = './about.html';
            break;
        default:
            fileName = null; // File not found for unknown routes
    }
    fs.readFile(fileName, (err, pagename) => {
        if (err) {
            console.log(`File is Not Found !`);
            res.end('Internal Server Error');
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

