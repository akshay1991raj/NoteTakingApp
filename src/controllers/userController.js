const userService=require('../services/userService.js');

const createUser = async(req,res,next)=>{
    try{
        const userData=req.body;
        const user= await userService.createUser(userData);
        if (!user){
            const error=new Error("User not created. Something went wrong.");
            error.status=500;
            throw error;
        }
        res.status(200).json({message: "New user created"});
    }catch(error){
        next(error);
    }
}

const getAllUsers = async (req,res,next)=>{
    //
}

module.exports={createUser,getAllUsers};