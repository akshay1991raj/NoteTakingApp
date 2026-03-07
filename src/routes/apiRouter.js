const express=require('express');
const apiRouter=express.Router();
const userRouter = require('./userRouter');
const noteRouter=require('./noteRouter');
const notebookRouter=require('./notebookRouter');


apiRouter.use('/user',userRouter);
// apiRouter.use('/note',noteRouter);
// apiRouter.use('/notebook', notebookRouter);

module.exports=apiRouter;