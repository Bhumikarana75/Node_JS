const express = require('express');
const app = express();
const port = 9000;
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) =>{
    return res.render('dashboard');
})

app.listen(port, (err) => {
    if (err) {
        return console.log('Error: ', err);
    }
    console.log(`Server is Running on http://localhost:${port}`);
});
