const adminModel=require('../../models/admin/adminUserModel');
const userModel=require('../../models/userModel');

const getAllUsers= async () =>{
    const users=await adminModel.getAllUsers();
    return users;
}

const deleteUserById= async (id) =>{
    const user_to_delete=await userModel.getUserById(id);
    let isDeleted=false;
    if(!user_to_delete){
        throw new Error("User does not exist");
    }
    if(user_to_delete.user_type==='admin'){
        throw new Error('Admin user cannot be deleted.');
    }
    await adminModel.deleteUserById(id);
    const deleted_user=await userModel.getUserById(id);
    if(typeof deleted_user==='undefined'){
        isDeleted=true;
    }
    return isDeleted;
}

module.exports={getAllUsers,deleteUserById};