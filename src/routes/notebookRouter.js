const express=require('express');
const notebookRouter=express.Router();
const notebookController=require('../controllers/notebookController');
const {validateNotebook}=require('../validators/notebookValidator');
const {validateMultipleInputsInBody,validateMultipleInputsInURLParameters,validateMultipleInputsInQueryString}=require('../validators/inputValidators');
const {validate}=require('../middleware/validate');
const {ensureAuthenticated}=require('../middleware/authMiddleware');
const {authorizeNotebook} = require('../middleware/authorizeMiddleware');

notebookRouter.get('/',ensureAuthenticated,notebookController.getNotebookByUser);

notebookRouter.get('/:notebookId',ensureAuthenticated,validateMultipleInputsInURLParameters('notebookId'),validate,authorizeNotebook,notebookController.getNotebookById);

notebookRouter.delete('/:notebookId',ensureAuthenticated,validateMultipleInputsInURLParameters('notebookId'),validate,authorizeNotebook,notebookController.deleteNotebookById);

notebookRouter.post('/',ensureAuthenticated,validateMultipleInputsInBody('title'),validateNotebook,validate,notebookController.createNotebook);

module.exports=notebookRouter;
