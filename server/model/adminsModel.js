const mongoose = require('mongoose');

var user = new mongoose.Schema({
    id_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const User = mongoose.model('admins', user);
module.exports = User;