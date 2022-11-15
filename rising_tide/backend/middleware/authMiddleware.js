const jwt = require("jsonwebtoken");
const aysncHandler= require("express-async-handler");
const User= require("../models/user.model");

const protect= aysncHandler( async(req, res, next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token= req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user= await User.findById(decoded.id).select("-password");

            next();
        } catch (error){

            console.log(error);
            res.status(401);
            throw new Error ("Not authorized");
        }
    }

    if(!token){
        res.token(401);
        throw new Error("Not authorized not token");
    }
})
module.exports= {protect}