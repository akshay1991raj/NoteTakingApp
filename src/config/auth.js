const passport=require('passport');
const localStrategy=require('passport-local').Strategy;
const authService=require('../services/authService');
const userService=require('../services/userService')

passport.use(new localStrategy({usernameField:'email'},
    async function (email,password,done){
        try{
            const user=await authService.verifyUser(email);
            if (!user){
                return done(null,false,{message: 'User does not exist'});
            }
            const passwordVerified=await authService.verifyPassword(email,password)
            if (!passwordVerified){
                return done(null,false,{message: 'Invalid Password'});
            }
            return done(null,user);
        }catch(err){
            return done(err);
        }
    }
))

passport.serializeUser(async (user,done)=>{
    done(null,user.id);
})

passport.deserializeUser(async (id,done)=>{
    try{
        const user=await userService.getUserById(id);
        return done(null,user);
    }catch(error){
        return done(error);
    }
})

module.exports=passport;