const express=require('express');
const userRouter=express.Router();
const userController=require('../controllers/userController');
const {validateUser}=require('../validators/userValidators');
const {validateMultipleInputsInBody,validateMultipleInputsInURLParameters,validateMultipleInputsInQueryString}=require('../validators/inputValidators');
const {validate}=require('../middleware/validate');
const {ensureAuthenticated,isAdmin}=require('../middleware/authMiddleware');

userRouter.get('/users',ensureAuthenticated,validateUser,validateMultipleInputsInBody('first_name','last_name'),userController.getAllUsers);

userRouter.get('/',ensureAuthenticated,userController.getUser);

userRouter.get('/:userId',ensureAuthenticated,userController.getUserById);

userRouter.delete('/:userId',ensureAuthenticated,isAdmin,userController.deleteUserById);

module.exports=userRouter;