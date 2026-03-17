const userService=require('../services/userService');

const getUser=async (req,res,next)=>{
    const userId=Number(req.session.passport.user);
    try{
        const user=await userService.getUserById(userId);
        console.log(user);
        return res.status(200).json({user:user});
    }catch(error){
        next(error);
    }

}

const getAllUsers=async (req,res,next)=>{
    try{
        const users=await userService.getAllUsers();
        console.log(users);
        return res.status(200).json({user:users});
    }catch(error){
        next(error);
    }

}

const getUserById=async (req,res,next)=>{
    const userId=Number(req.params.userId);
    try{
        const user=await userService.getUserById(userId);
        console.log(user);
        return res.status(200).json({user:user});
    }catch(error){
        next(error);
    }

}

module.exports={getUser,getAllUsers,getUserById};