const mongoose = require('mongoose');

var students = new mongoose.Schema({
    Student_Number: {
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
    Gender:{
        type: String,
        required:true
    },
    Grade_Level:{
    type: String,
    required:true
    }
});

const Students = mongoose.model('students', students);
module.exports = Students;