const express=require('express');
const authRouter=express.Router();
const passport=require('passport');
const authController=require('../controllers/authController');

authRouter.post('/login',
    passport.authenticate('local',{
        successRedirect:'/api/user',
        failureRedirect:'/'
    })
)

authRouter.post('/signup',authController.signUp);

module.exports=authRouter;