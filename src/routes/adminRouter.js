const express=require('express');
const adminRouter=express.Router();
const adminController = require('../controllers/adminController');

adminRouter.get('/users', adminController.getAllUsers);

adminRouter.delete('/user/:userId', adminController.deleteUserById);

module.exports=adminRouter;