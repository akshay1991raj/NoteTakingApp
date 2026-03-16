const connectionPool=require('../config/db.js');

const getAllUsers= async ()=>{
    const query=`select * from users`;
    const result= await connectionPool.query(query);
    return result;
}

const getUserById = async (userId)=>{
    const query=`select id,email,first_name,last_name from users where id=$1`;
    const values=userId;
    const result= await connectionPool.query(query,[values]);
    const user=result.rows[0];
    return user;
}



module.exports={getAllUsers,getUserById};