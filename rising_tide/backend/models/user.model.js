const mongoose= require('mongoose')

const userSchema= mongoose.Schema({
    _id: { type: String, required: true, unique: true, minlength: 3},
    password: {type: String, required: true},
    email:{ type: String, required: true}
    
},{
    timestamps:true,
});

const user=mongoose.model("user", euserSchema);
module.exports= user;
