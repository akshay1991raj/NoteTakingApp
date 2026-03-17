const userService=require('../services/userService');

const getUser=async (req,res,next)=>{
    const userId=Number(req.session.passport.user);
    try{
        const user=await userService.getUserById(userId);
        return res.status(200).json({user:user});
    }catch(error){
        next(error);
    }

}

const getAllUsers=async (req,res,next)=>{
    try{
        const users=await userService.getAllUsers();
        return res.status(200).json({user:users});
    }catch(error){
        next(error);
    }

}

const getUserById=async (req,res,next)=>{
    const userId=Number(req.params.userId);
    try{
        const user=await userService.getUserById(userId);
        return res.status(200).json({user:user});
    }catch(error){
        next(error);
    }
}

const deleteUserById=async (req,res,next)=>{
    const userId=Number(req.params.userId);
    try{
        const isDeleted=await userService.deleteUserById(userId);
        if (!isDeleted){
            return res.status(500).json({error:'Something went wrong. User could not be deleted'});
        }
        return res.status(200).json({message:"User deleted."});
    }catch(error){
        next(error);
    }
}

module.exports={getUser,getAllUsers,getUserById,deleteUserById};