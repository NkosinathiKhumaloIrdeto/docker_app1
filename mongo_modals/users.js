var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Users = new Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model('users', Users);