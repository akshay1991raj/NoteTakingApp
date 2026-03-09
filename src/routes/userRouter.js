const express=require('express');
const userRouter=express.Router();
const {createUser,getAllUsers}=require('../controllers/userController');
const {validateUser}=require('../validators/userValidators');
const {validateMultipleInputsInBody,validateMultipleInputsInURLParameters,validateMultipleInputsInQueryString}=require('../validators/inputValidators');
const {validate}=require('../middleware/validate');

userRouter.get('/',getAllUsers);

// userRouter.get('/:userId',userController.getUserById);

userRouter.post('/',validateMultipleInputsInBody('name'), validateUser, validate, createUser);

module.exports=userRouter;