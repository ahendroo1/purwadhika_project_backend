
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const userSchema = new Schema({

    nama: String,
    email: String,
    no_telp: Number,
    password: String

});

const User = mongoose.model('user', userSchema);
// It will create a ‘Users’ collection!
module.exports = User;