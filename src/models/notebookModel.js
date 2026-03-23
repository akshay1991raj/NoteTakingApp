const connectionPool=require('../config/db.js');

const getAllNotebooks= async ()=>{
    const query=`select * from notebook`;
    const result= await connectionPool.query(query);
    return result;
}

const getNotebookById= async (notebookId)=>{
    const query=`select * from notebook where id=$1`;
    const values=[notebookId];
    const result= await connectionPool.query(query,values);
    return result.rows[0];
}

const createNotebook=async (userId,notebookTitle)=>{
    const query=`insert into notebook(title,user_id) values($1,$2) returning id,title`;
    const values=[notebookTitle,userId];
    const result=await connectionPool.query(query,values);
    const notebook=result.rows[0];
    return notebook;
}

const deleteNotebookById = async (notebookId)=>{
    const query=`delete from notebook where id=$1`;
    let values=[notebookId];
    await connectionPool.query(query,values);
}

const getNotebookOwnerId=async (userId)=>{
    const query=`select id,title,created_at from notebook where user_id=$1`;
    const values=[userId];
    const result=await connectionPool.query(query,values);
    const notebook=result.rows;
    return notebook;
}


module.exports={getAllNotebooks,getNotebookById,createNotebook,deleteNotebookById,getNotebookOwnerId};