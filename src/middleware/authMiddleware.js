const ensureAuthenticated=(req,res,next)=>{
    if(req.isAuthenticated()){
        req.currentUser={
            id: req.user.id,
            user_type: req.user.user_type
        }
        return next();
    }
    return res.status(401).json('Not authenticated');
}

const isAdmin=(req,res,next)=>{
    if(req.currentUser.user_type==="admin"){
        return next();
    }
    return res.status(403).json('Access denied. Admins only.');
}




module.exports={ensureAuthenticated,isAdmin};