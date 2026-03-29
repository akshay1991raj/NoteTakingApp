const userModel=require('../models/authModel');
const bcrypt=require('bcrypt');
require('dotenv').config();

const registerUser= async (userData) =>{
    const {first_name,last_name,email,password}=userData;
    const existingUser= await userModel.getUserByEmail(email);
    if (existingUser){
        throw new Error('User exists');
    }
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user=await userModel.createUser(first_name,last_name,email,passwordHash);
    return user;
}

const verifyUser=async (email)=>{
    const user=await userModel.getUserByEmail(email);
    if(!user){
        return null;
    }
    return user;
}

const verifyPassword=async (email,password)=>{
    const user=await userModel.getUserWithPasswordByEmail(email);
    if (!user){
        throw new Error("User does not exist");
    }
    const validPassword=await bcrypt.compare(password,user.password);
    if (!validPassword){
        return null;
    }
    return user;   
}



module.exports={verifyUser,verifyPassword,registerUser};