const Question = require('../model/questionnaireModel');

//create and save new user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }

    //new user
    const question = new Question({
        category:req.body.category,
        question:req.body.question
    })

    //save user in the database
    question
        .save(question)
        .then(data => {
            res.redirect('/questionnaire.html');
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

    Question.find()
    .then(question => {
        res.send(question)
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
    Question.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
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