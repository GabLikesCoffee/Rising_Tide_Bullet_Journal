const mongoose= require('mongoose')

const Schema= mongoose.Schema;

const dateSchema= new Schema({
    day:{type: Number, required: true},
    month:{type: String, required: true},
    year:{type: Number, required: true}
});
const habitSchema= new Schema({
    activity:{type: String, required: true},
    isCompleted:{type:Boolean, required:true},
    completionDate: {type:dateSchema}
    
},{
    timestamps:true,
});

const habit=mongoose.model("habit", habitSchema);
module.exports= habit;
