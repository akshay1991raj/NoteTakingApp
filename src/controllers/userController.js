const userService=require('../services/userService.js');

const createUser = async(req,res,next)=>{
    const userData=req.body;

    const user= await userService.createUser(userData);
    res.status(200).send("New user created"+user);
}

const getAllUsers = async (req,res,next)=>{
    //
}

module.exports={createUser,getAllUsers};