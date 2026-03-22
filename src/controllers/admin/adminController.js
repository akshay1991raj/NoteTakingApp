const adminService=require('../../services/admin/adminService');

const getAllUsers=async (req,res,next)=>{
    try{
        const users=await adminService.getAllUsers();
        return res.status(200).json({user:users});
    }catch(error){
        next(error);
    }

}

const deleteUserById=async (req,res,next)=>{
    const userId=Number(req.params.userId);
    try{
        const isDeleted=await adminService.deleteUserById(userId);
        if (!isDeleted){
            return res.status(500).json({error:'Something went wrong. User could not be deleted'});
        }
        return res.status(200).json({message:"User deleted."});
    }catch(error){
        next(error);
    }
}

module.exports={getAllUsers,deleteUserById};