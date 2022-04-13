var User=require('../model/model');
//create and save new User.
exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty."
        });
        return;
    }
const user=new User({
    c_name:req.body.c_name,
    c_duration:req.body.c_duration,
    c_fees:req.body.c_fees,
    status:req.body.status
});
//save users in the database
user.save(user)
.then(data=>{
    //res.send(data)
    res.redirect('/add-user')
})
.catch(err=>{
        res.status(500).send({
            message:err.message||"some error occor at the time of create operation."
        });
});
}

//retrive and returns all users/retrive and return a single user.
exports.find=(req,res)=>{
  console.log("there ",req.query._id);
    if(req.query._id){
        const id=req.query._id;
        User.findByPk(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"not found user with id "+id})   
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retriving user with id "+id})
        })
    }
    else{
    const user=req.query.user;
    //var condition='select * from users';
    User.findAll(user)
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Error occour while retriving user information."
        })
    })
}}


//Update a new identified user by userid
exports.update=(req,res)=>{
  if(!req.body){
    return res.status(400)
    .send({message: 'Data to update can not be empty'})
  }
    const id=req.params.id;
    User.update(req.body,{where:{id:id}})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}.may be user not found`})
        }
        else{
           res.send(data)
        }
    })
    .catch(err=>{
    res.status(500).send({message:"Error Update user information"})
    })

}
//delete a user with specified user id in the request.
exports.delete=(req,res)=>{
    const id = req.params.id;
  User.destroy({
    where: { id: id }
  })
    .then(data => {
      if (data == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });

}