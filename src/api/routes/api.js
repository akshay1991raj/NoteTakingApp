const express=require('express');
const apiRouter= express.Router();
const notesRouter=require('./notes.js');

apiRouter.get('/',(req,res,next)=>{
    res.status(200).send("Server is alive");
})

apiRouter.use('/notes',notesRouter);

module.exports = apiRouter;