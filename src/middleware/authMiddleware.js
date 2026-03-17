const ensureAuthenticated=(req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.status(401).json('Not authenticated');
}

const isAdmin=(req,res,next)=>{
    if(req.user.user_type==="admin"){
        return next();
    }
    res.status(403).json('Access denied. Admins only.');
}

module.exports={ensureAuthenticated,isAdmin};