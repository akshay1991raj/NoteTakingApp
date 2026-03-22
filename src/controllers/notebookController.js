const notebookService=require('../services/notebookService');

const getNotebookByUser=async (req,res,next)=>{
    try{
        const userId=req.currentUser.id;
        const notebook=await notebookService.getNotebookByUserId(userId);
        res.status(200).json({"notebook":notebook});
    }catch(error){
        next(error);
    }
}

const createNotebook=async (req,res,next)=>{
    try{
        const userId=req.currentUser.id;
        const newNotebook=req.body;
        const notebook=await notebookService.createNotebook(userId,newNotebook);
        res.status(200).json({"notebook":notebook});
    }catch(error){
        next(error);
    }
}

const getNotebookById=async (req,res,next)=>{
    try{
        const userId=req.currentUser.id;
        const notebookId=Number(req.params.id);
        const notebook=await notebookService.getNotebookById(userId,notebookId);
        res.status(200).json({"notebook":notebook});
    }catch(error){
        next(error);
    }
}

module.exports={getNotebookByUser,getNotebookById,createNotebook};