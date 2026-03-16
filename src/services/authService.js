const userModel=require('../models/authModel');
const bcrypt=require('bcrypt');
require('dotenv').config();

const registerUser= async (userData) =>{
    const {first_name,last_name,email,password}=userData;
    const existingUser= await userModel.getUserByEmail(email);
    if (existingUser){
        throw new Error('User exists');
    }
    const saltRounds = Number(process.env.SALT_ROUNDS);
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
    const user=await verifyUser(email);
    if (!user){
        return null;
    }
    const userPassword=await userModel.getPasswordByEmail(email);
    const validPassword=await bcrypt.compare(password,userPassword.password);
    if (!validPassword){
        return null;
    }
    return user;   
}

module.exports={verifyUser,verifyPassword,registerUser};