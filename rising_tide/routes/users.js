const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(async(req, res) => {
  const {username,email,password}= req.body;
  const newUser =new User({ username, password,email });
 
 
    if(!username || username==null){
      res.status(400);
      throw new Error("All fields not entered");
    }
  /* res.status(201)
      newUser
      .save()
      */
    const userExist=  await User.findOne({"username" : username});
    try{
      if(userExist){
        res.status(400);
        
        throw new Error("Username is already used");
      }
      if(newUser){
        res.status(201);
        newUser
        .save()
        .then(() => res.json(createToken(
        {
          username: newUser.username,
          password:newUser.password
        }
        )));
      }else{
        res.status(400);
        throw new Error("user DNE");
      }
  }catch(Error){
    res.json(Error.message)
  }
  
   
});
const createToken=(user)=>{
  return jwt.sign({user}, process.env.JWT_SECRET,{
    expiresIn: "30d",
  });
}
module.exports = router;
