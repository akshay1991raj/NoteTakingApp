const express=require('express');
const adminRouter=express.Router();
const adminController = require('../controllers/adminController');
const {ensureAuthenticated, isAdmin}=require('../middleware/authMiddleware')

adminRouter.get('/users', ensureAuthenticated, isAdmin, adminController.getAllUsers);

adminRouter.delete('/user/:userId', ensureAuthenticated, isAdmin, adminController.deleteUserById);

module.exports=adminRouter;