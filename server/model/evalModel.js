const mongoose = require('mongoose');

var eval = new mongoose.Schema({
    Comment: {
        type: String,
        required: true
    }
});


const Eval = mongoose.model('evals', eval);
module.exports = Eval;