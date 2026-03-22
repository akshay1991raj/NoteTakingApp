const userService=require('../services/userService');

const getUser=async (req,res,next)=>{
    try{
        const userId=Number(req.currentUser.id);
        const user=await userService.getUserById(userId);
        return res.status(200).json({user:user});
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

module.exports={getUser,getUserById};