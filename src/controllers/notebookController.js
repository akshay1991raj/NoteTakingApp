const notebookService=require('../services/notebookService');

const getNotebookByUser=async (req,res,next)=>{
    try{
        const userId=req.currentUser.id;
        const notebook=await notebookService.getNotebookByUserId(userId);
        return res.status(200).json({"notebook":notebook});
    }catch(error){
        next(error);
    }
}

const createNotebook=async (req,res,next)=>{
    try{
        const userId=req.currentUser.id;
        const newNotebook=req.body;
        const notebook=await notebookService.createNotebook(userId,newNotebook);
        return res.status(200).json({"notebook":notebook});
    }catch(error){
        next(error);
    }
}

const deleteNotebookById = async (req,res,next) =>{
    try{
        const notebookId=req.params.notebookId;
        const isDeleted=await notebookService.deleteNotebookById(notebookId);
        if (!isDeleted){
            return res.status(500).json({message:"Something went wrong. Notebook not deleted"});
        }
        return res.status(200).json({Message:"Notebook deleted"});
    }catch(error){
        next(error);
    }
}

const getNotebookById=async (req,res,next)=>{
    try{
        const userId=req.currentUser.id;
        const notebookId=Number(req.params.notebookId);
        const notebook=await notebookService.getNotebookById(userId,notebookId);
        return res.status(200).json({"notebook":notebook});
    }catch(error){
        next(error);
    }
}

module.exports={getNotebookByUser,getNotebookById,createNotebook,deleteNotebookById};