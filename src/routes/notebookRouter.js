const express=require('express');
const notesbookRouter=express.Router();
const notebookController=require('../controllers/notebookController');
const {validateNotebook}=require('../validators/notebookValidator');
const {validateMultipleInputsInBody,validateMultipleInputsInURLParameters,validateMultipleInputsInQueryString}=require('../validators/inputValidators');
const {validate}=require('../middleware/validate');
const {ensureAuthenticated}=require('../middleware/authMiddleware');
const {authorizeNotebook} = require('../middleware/authorizeMiddleware');

notesbookRouter.get('/',ensureAuthenticated,notebookController.getNotebookByUser);

notesbookRouter.get('/:notebookId',ensureAuthenticated,validateMultipleInputsInURLParameters('notebookId'),validate,authorizeNotebook,notebookController.getNotebookById);

notesbookRouter.post('/',ensureAuthenticated,validateMultipleInputsInBody('title'),validateNotebook,validate,notebookController.createNotebook);

module.exports=notesbookRouter;
