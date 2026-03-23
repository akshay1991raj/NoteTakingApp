const connectionPool=require('../config/db');

const getUserByEmail= async (email)=>{
    const query=`select id,email from users where email=$1`;
    const result = await connectionPool.query(query,[email]);
    return result.rows[0];
}

const createUser= async (first_name,last_name,email,password)=>{
    const insertQuery=`insert into users(first_name,last_name,email,password,user_type) values($1,$2,$3,$4,$5) returning id,first_name,last_name,email,user_type`;
    const values_insert=[first_name,last_name,email,password,'regular'];
    const result_insert=await connectionPool.query(insertQuery,values_insert);
    const user=result_insert.rows[0];
    return user;
}

const getUserWithPasswordByEmail = async (email) => {
    const query = `SELECT id, email, password FROM users WHERE email=$1`;
    const result = await connectionPool.query(query, [email]);
    return result.rows[0];
}

module.exports={getUserByEmail,createUser,getUserWithPasswordByEmail};