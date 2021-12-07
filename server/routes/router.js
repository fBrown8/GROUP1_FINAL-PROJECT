const express = require('express');
const route = express.Router()
const passport = require('passport')

const services = require('../services/render');
const controller = require('../controller/controller')
const teacherController = require('../controller/teacherController')
const studentController = require('../controller/studentController')
const questionnaireController = require('../controller/questionnaireController')
const login = require('../controller/login')
const evalController = require('../controller/evalController')


//HOME ROUTE
route.get('/', services.homeRoutes);

//FOR ADMIN
route.get('/admin-dashboard', services.admin_dashboard);
route.get('/admin-records', services.admin_records);

//STUDENT EVALUATION
route.get('/evaluation-page', services.evaluation_page);

route.get('/faculty-list', services.faculty_list);

//QUESTIONNAIRE
route.get('/questionnaire', services.questionnaire);

route.get('/records-page', services.records_page);
//STUDENT PAGE
route.get('/student-page', services.student_page);
//ADMIN
route.get('/students-list', services.students_list);


//API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

//API for Teacher
route.post("/api/teachers", teacherController.create);
route.get('/api/teachers', teacherController.find);
route.put("/api/teachers/:id", teacherController.update);
route.delete("/api/teachers/:id", teacherController.delete);

//API for Students
route.post("/api/students", studentController.create);
route.get('/api/students', studentController.find);
route.put("/api/students/:id", studentController.update);
route.delete("/api/students/:id", studentController.delete);

//API for questionnaires
route.post("/api/questions", questionnaireController.create);
route.get('/api/questions', questionnaireController.find);
route.put("/api/questions/:id", questionnaireController.update);
route.delete("/api/questions/:id", questionnaireController.delete);

//API for Evals
route.post("/api/evals", evalController.create);


route.post('/index.html', (req,res) =>{
    passport.authentication('local', {
    successRedirect: '/admin-dashboard',
    failureRedirect: '/index.html',
    failureFlash: True
})(req, res, next);
});



module.exports =route