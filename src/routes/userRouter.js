const express=require('express');
const userRouter=express.Router();
const userController=require('../controllers/userController');
const {validateUser}=require('../validators/userValidators');
const {validateMultipleInputsInBody,validateMultipleInputsInURLParameters,validateMultipleInputsInQueryString}=require('../validators/inputValidators');
const {validate}=require('../middleware/validate');
const {ensureAuthenticated}=require('../middleware/authMiddleware');

userRouter.get('/',ensureAuthenticated,userController.getUser);

userRouter.get('/:userId',ensureAuthenticated,userController.getUserById);

module.exports=userRouter;