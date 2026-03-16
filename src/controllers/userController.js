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

const getAllUsers = async (req,res,next)=>{
    //To-do
}

module.exports={getUser,getAllUsers};