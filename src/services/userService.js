const userModel=require('../models/userModel');

const getUserById= async (id) =>{
    const user=await userModel.getUserById(id);
    if(typeof user==='undefined'){
        throw new Error('User does not exist');
    }
    return user;
}

module.exports={getUserById};