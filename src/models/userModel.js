const connectionPool=require('../config/db.js');

const getAllUsers= async ()=>{
    const query=`select * from users`;
    const result= await connectionPool.query(query);
    return result;
}

async function getUserById(userId){
    const query=`select * from users where userId=$1`;
    const values=[userId];
    const result= await connectionPool.query(query,values);
    return result;
}

async function createUser(name,email,password){
    const query=`insert into users(name,email,password) values($1,$2,$3) returning *`;
    const values=[name,email,password];
    const result=await connectionPool.query(query,values);
    // console.log(result)
    return result;
}

module.exports={getAllUsers,getUserById,createUser};