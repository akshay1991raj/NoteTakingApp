const connectionPool=require('../config/db.js');

const getUserById = async (userId)=>{
    const query=`select id,email,first_name,last_name,user_type from users where id=$1`;
    const values=userId;
    const result= await connectionPool.query(query,[values]);
    const user=result.rows[0];
    return user;
}



module.exports={getUserById};