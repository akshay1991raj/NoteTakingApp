const notebookModel=require('../models/notebookModel');
const noteModel=require('../models/noteModel');

const authorizeNotebook= async (req,res,next)=>{
    try{
        const notebookId=Number(req.params.notebookId);
        if(!notebookId){
            return res.status(404).json({message:"NotebookId not provided"});
        }
        const userId=req.currentUser.id;
        const notebook=await notebookModel.getNotebookById(notebookId);
        if (!notebook){
            return res.status(404).json({message:"Notebook does not exist"});
        }
        if (notebook.user_id !== userId){
            return res.status(403).json({message:"Access Denied. User does not own the notebook."})
        }
        return next();
    }catch(error){
        return next(error);
    }
}

// const authorizeNote= async (req,res,next)=>{
//     const note=await noteModel.getNoteById(noteId);
//     if (!note){
//         throw new Error('Note not found.');
//     }
//     if (note.userId !== userId){
//         res.status(403).json({message:"Access Denied. User does not own the note."})
//     }
// }

module.exports={authorizeNotebook};