const express=require('express');
const userRouter=express.Router();
const {createUser,getAllUsers}=require('../controllers/userController');
const {validateUser}=require('../validators/userValidators');
const {validate}=require('../middleware/validate');

userRouter.get('/',getAllUsers);

// userRouter.get('/:userId',userController.getUserById);

userRouter.post('/',validateUser, validate, createUser);

module.exports=userRouter;