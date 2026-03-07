const userService=require('../services/userService.js');

const createUser = async(req,res,next)=>{
    const userData=req.body;
    const {name,email,password}=userData;
    console.log(userData);
    const user= await userService.createUser(userData);
    // res.status(200).send("New user created");
    res.json({message: "User received", name, email, password});
}

const getAllUsers = async (req,res,next)=>{
    //
}

module.exports={createUser,getAllUsers};