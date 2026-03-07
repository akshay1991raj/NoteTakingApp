const userService=require('../services/userService.js');

async function createUser(req,res,next){
    const userData=req.body;

    const user= await userService.createUser(userData);
    res.status(200).send("New user created"+user);
}

module.exports={createUser};