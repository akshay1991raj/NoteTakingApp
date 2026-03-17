const connectionPool=require('../config/db.js');

const getAllUsers= async ()=>{
    const query=`select id,email,first_name,last_name,user_type from users`;
    const result= await connectionPool.query(query);
    const users=result.rows;
    return users;
}

const getUserById = async (userId)=>{
    const query=`select id,email,first_name,last_name,user_type from users where id=$1`;
    const values=userId;
    const result= await connectionPool.query(query,[values]);
    const user=result.rows[0];
    return user;
}

const deleteUserById = async (userId)=>{
    const query=`delete from users where id=$1`;
    const values=userId;
    const result= await connectionPool.query(query,[values]);
    const user=result.rows[0];
    return user;
}



module.exports={getAllUsers,getUserById,deleteUserById};