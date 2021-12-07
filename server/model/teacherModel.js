const mongoose = require('mongoose');

var teacher = new mongoose.Schema({
    Faculty_Id: {
        type:String,
        required:true
    },
    Last_Name:{
        type: String,
        required:true
    },
    First_Name:{
        type: String,
        required:true
    },
    Subject:{
        type: String,
        required:true
    }
});

const Teacher = mongoose.model('teachers', teacher);
module.exports = Teacher;