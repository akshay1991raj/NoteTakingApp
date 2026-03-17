const userModel=require('../models/userModel');

const getUserById= async (id) =>{
    const user=await userModel.getUserById(id);
    if(typeof user==='undefined'){
        throw new Error('User does not exist');
    }
    return user;
}

const getAllUsers= async () =>{
    const users=await userModel.getAllUsers();
    return users;
}

const deleteUserById= async (id) =>{
    const user_to_delete=await getUserById(id);
    let isDeleted=0;
    if(user_to_delete.user_type==='admin'){
        throw new Error('Admin user cannot be deleted.');
    }
    const result=await userModel.deleteUserById(id);
    const deleted_user=await userModel.getUserById(id);
    if(typeof deleted_user==='undefined'){
        isDeleted=1;
    }
    return isDeleted;
}

module.exports={getUserById,getAllUsers,deleteUserById};