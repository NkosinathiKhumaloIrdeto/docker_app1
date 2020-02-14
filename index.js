let express = require('express');
let app = new express();
var port = 8045;
let mongo = require('mongoose')
var usersModal = require('./mongo_modals/users');
var bodyParser = require('body-parser');
//"mongodb://localhost:27017/dockerdb" - local
var con_string = 'mongodb://mongodb_container:27017/dockerdb';

app.use(bodyParser.json());

mongo.connect(con_string)
    .then(() => console.log('Connection succesful'))
    .catch((err) => console.error(err));

app.use(express.static('src'))

//default path
app.get('/get', (req, res) => {

    usersModal.find({}).exec((err, data) => {

        if (err) {
            res.status(500).send({ 'status': 500, 'msg': err });
            return;
        }

        res.send(data);

    })

})

app.listen(8045);