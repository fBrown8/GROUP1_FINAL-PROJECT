const Eval = require ("../model/evalModel");

//create and save new user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }

    //new user
    const eval = new Eval({
        Comment: req.body.Comment
    })

    //save user in the database
    eval
        .save(eval)
        .then(data => {
            res.redirect('/questionnaire.html');
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || "Some error occurred while creating a operation"
            });
        });

}