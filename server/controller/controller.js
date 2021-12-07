const User = require('../model/adminsModel');

//create and save new user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }

    //new user
    const user = new User({
        id_number: req.body.id_number,
        password: req.body.password
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
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

        User.findById(id)
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

    User.find()
    .then(user => {
        res.send(user)
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
    User.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
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

    User.findByIdAndDelete(id)
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

exports.checkCredentials =(req,res)=>{
    console.log(req.body)
    
    User.findOne({id_number: req.body.user}, function(err,user){
        console.log(user)
       
        if(user.Password === req.body.id_number){
            
            res.redirect("/students-page.html")
        }else{
            res.redirect("/index.html")
        }
    })
}