const userModel=require('../models/userModel');

const getUserById= async (id) =>{
    const user=await userModel.getUserById(id);
    return user;
}

module.exports={getUserById};