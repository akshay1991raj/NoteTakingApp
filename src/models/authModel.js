const connectionPool=require('../config/db');

const getUserByEmail= async (email)=>{
    const query=`select id,email from users where email=$1`;
    const result = await connectionPool.query(query,[email]);
    return result.rows[0];
}

const getPasswordByEmail= async (email)=>{
    const query=`select password from users where email=$1`;
    const result = await connectionPool.query(query,[email]);
    return result.rows[0];
}

const createUser= async (first_name,last_name,email,password)=>{
    const insertQuery=`insert into users(first_name,last_name,email,password,user_type) values($1,$2,$3,$4,$5) returning id`;
    const values_insert=[first_name,last_name,email,password,'regular'];
    const result_insert=await connectionPool.query(insertQuery,values_insert);
    const last_inserted_id=result_insert.rows[0].id;
    const selectQuery=`select * from users where id=$1`;
    const result_last_inserted=await connectionPool.query(selectQuery,[last_inserted_id]);
    const user=result_last_inserted.rows[0];
    return user;
}

module.exports={getUserByEmail,getPasswordByEmail,createUser};