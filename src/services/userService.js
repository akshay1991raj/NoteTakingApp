const userModel=require('../models/userModel');

const getUserById= async (id) =>{
    const user=await userModel.getUserById(id);
    return user;
}

const getAllUsers= async () =>{
    const users=await userModel.getAllUsers();
    return users;
}

module.exports={getUserById,getAllUsers};