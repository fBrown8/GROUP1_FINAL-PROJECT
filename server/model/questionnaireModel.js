const mongoose = require('mongoose');

var question = new mongoose.Schema({
    category: {
        type:String,
        required:true
    },
    question:{
        type: String,
        required:true
    }
});

const Question = mongoose.model('questionnaire', question);
module.exports = Question;