const userModel=require('../models/userModel');

const createUser= async (userData) =>{
    const user=await userModel.createUser(userData.name,userData.email,userData.password);
    return user;
}

module.exports={createUser};