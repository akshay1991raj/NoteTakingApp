const adminModel=require('../models/adminModel');
const userModel=require('../models/userModel');

const getAllUsers= async () =>{
    const users=await adminModel.getAllUsers();
    return users;
}

const deleteUserById= async (id) =>{
    const user_to_delete=await userModel.getUserById(id);
    let isDeleted=0;
    if(user_to_delete.user_type==='admin'){
        throw new Error('Admin user cannot be deleted.');
    }
    const result=await adminModel.deleteUserById(id);
    const deleted_user=await userModel.getUserById(id);
    if(typeof deleted_user==='undefined'){
        isDeleted=1;
    }
    return isDeleted;
}

module.exports={getAllUsers,deleteUserById};