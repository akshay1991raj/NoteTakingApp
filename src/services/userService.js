const userModel=require('../models/userModel');

async function createUser(userData){
    const user=await userModel.createUser(userData.name,userData.email,userData.password);
    return user;
}

module.exports={createUser};