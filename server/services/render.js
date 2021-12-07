const axios = require('axios');


exports.homeRoutes = (req,res) =>{
    res.render('index');
}

exports.admin_dashboard = (req,res) =>{
    res.render('admin_dashboard')
}

exports.admin_records = (req,res) =>{
    res.render('admin_records')
}

exports.evaluation_page = (req,res) =>{
    res.render('evaluation_page');
}

exports.faculty_list = (req,res) =>{
    res.render('faculty_list');
}

exports.faculty_page = (req,res) =>{
    res.render('faculty_page');
}

exports.questionnaire = (req,res) =>{
    res.render('questionnaire');
}

exports.records_page = (req,res) =>{
    res.render('records_page');
}

exports.student_page = (req,res) =>{
    res.render('student_page');
}

exports.students_list = (req,res) =>{
}


