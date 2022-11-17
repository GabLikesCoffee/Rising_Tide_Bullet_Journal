const jwt = require("jsonwebtoken");


const User= require("../models/user.model");

function protect(req, res, next){
    let token;

    
        try{
            token= req.id

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user= User.find(decoded.id).select("-password");

            next();
        } catch (error){

            console.log(error.message);
            res.status(401);
            res.json(null);
        }
    

    if(!token){
        res.status(401);
        throw new Error("Not authorized not token");
    }
}
module.exports= {protect}
