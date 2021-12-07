const Teacher = require('../model/teacherModel');

//create and save new user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }

    //new user
    const teacher = new Teacher({
        Faculty_Id:req.body.Faculty_Id,
        Last_Name:req.body.Last_Name,
        First_Name:req.body.First_Name,
        Subject:req.body.Subject,

    })

    //save user in the database
    teacher
        .save(teacher)
        .then(data => {
            res.redirect('/faculty-list.html');
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

        Teacher.findById(id)
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

    Teacher.find()
    .then(teacher => {
        res.send(teacher)
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
    Teacher.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
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

    Teacher.findByIdAndDelete(id)
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