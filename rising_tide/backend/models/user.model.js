const mongoose= require('mongoose')
import {journal} from './journal.model.js'
import {habit} from './habit.model.js'

const userSchema= mongoose.Schema({
    _id: { type: String, required: true, unique: true, minlength: 3},
    password: {type: String, required: true},
    email:{ type: String, required: true},
    habitList:{type:[habit]},
    journalList:{type:[journal]}
    
},{
    timestamps:true,
});

const user=mongoose.model("user", userSchema);
module.exports= user;
