const express=require('express');
const userRouter=express.Router();
const userController=require('../controllers/userController');
const {validateUser}=require('../validators/userValidators');
const {validateMultipleInputsInBody,validateMultipleInputsInURLParameters,validateMultipleInputsInQueryString}=require('../validators/inputValidators');
const {validate}=require('../middleware/validate');
const {ensureAuthenticated}=require('../middleware/authMiddleware');

userRouter.get('/users',ensureAuthenticated,userController.getAllUsers);

userRouter.get('/',ensureAuthenticated,userController.getUser);

// userRouter.get('/:userId',userController.getUserById);

// userRouter.post('/signup',validateMultipleInputsInBody('first_name','last_name'), validateUser, validate, userController.createUser);

// userRouter.post('/login', validateUser, validate, userController.createUser);

module.exports=userRouter;