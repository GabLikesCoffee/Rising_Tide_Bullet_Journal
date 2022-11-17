const jwt = require("jsonwebtoken");


const User= require("../models/user.model");

function isValidToken(req){
    let token;

    
       
        token= req;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        user= User.find({username: decoded.id, password: decoded.password});
        if(user){
            return decoded.id;
        }

        
        return null;
     
    

    
}
module.exports= {protect}