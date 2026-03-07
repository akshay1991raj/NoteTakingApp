const userModel=require('../models/userModel');

const createUser= async (userData) =>{
    const {name,email,password}=userData;
    const user=await userModel.createUser(name,email,password);
    return user;
}

module.exports={createUser};