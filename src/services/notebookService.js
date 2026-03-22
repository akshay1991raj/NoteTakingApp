const notebookModel=require('../models/notebookModel');

const getNotebookById= async (notebookId)=>{
    const notebook=await notebookModel.getNotebookById(notebookId);
    if (!notebook){
        throw new Error('Notebook not found.');
    }
    return notebook;
}

const getNotebookByUserId= async (userId)=>{
    const notebook=await notebookModel.getNotebookOwnerId(userId);
    return notebook;
}

const createNotebook= async (userId,newNotebook)=>{
    const notebookTitle=newNotebook.title;
    const notebook=await notebookModel.createNotebook(userId,notebookTitle);
    return notebook;
}

const deleteNotebookById = async (notebookId)=>{
    await notebookModel.deleteNotebookById(notebookId);
    let isDeleted=false;
    const notebook=await notebookModel.getNotebookById(notebookId);
    if (!notebook){
        isDeleted=true;
    }
    if (!notebook){
        isDeleted=true;
    }
    return isDeleted;
}

module.exports={getNotebookById,createNotebook,getNotebookByUserId,deleteNotebookById};