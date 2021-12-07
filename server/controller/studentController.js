const Students = require('../model/studentModel');

//create and save new user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }

    //new user
    const students = new Students({
        Student_Number:req.body.Student_Number,
        Last_Name:req.body.Last_Name,
        First_Name:req.body.First_Name,
        Gender:req.body.Gender,
        Grade_Level:req.body.Grade_Level
    })

    //save user in the database
    students
        .save(students)
        .then(data => {
            //res.send(data)
            res.redirect('/students-list.html');
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || "Some error occurred while creating a operation"
            });
        });

}

//retrieve and return a single user
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;

        Students.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: "Not found user with id" + id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error retrieving user id" + id})
        })

    }else{

    Students.find()
    .then(students => {
        res.send(students)
    })
    .catch(err =>{
        res.status(500).send({ message: err.message || "Error Occured while retriving user information"})
    })
}
}

//Update a new identified user by user id
exports.update = (req,res) =>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Students.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(404).send({ message: 'Not found user with id' + id})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error Update user information"})
    })
}

//Delete a user with specified user
exports.delete=(req, res) =>{
    const id = req.params.id;

    Students.findByIdAndDelete(id)
    .then(data => {
        if(!data){
        res.status(404).send({message: 'Cannot Delete with id ' + id + 'Maybe id is wrong.'})
    }else{
        res.send({
            message: "User was deleted successfully!"
        })
    }
})
.catch(err => {
    res.status(500).send({
        message: "Could not delete User with id" + id
    });
});

}