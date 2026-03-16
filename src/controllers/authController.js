const authService=require('../services/authService');

const signUp = async(req,res,next)=>{
    try{
        const userData=req.body;
        const user= await authService.registerUser(userData);
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


module.exports={signUp};