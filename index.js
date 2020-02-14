let express = require('express');
let app = new express();
var port = 8045;
let mongo = require('mongoose')

var con_string = 'mongodb://mongo_service:27017/dockerdb';

mongo.connect(con_string)
    .then(() => console.log('Connection succesful'))
    .catch((err) => console.error(err));

app.use(express.static('src'))

//default path
app.get('/', (req, res) => {
    req.send('working');
})

app.listen(8045);