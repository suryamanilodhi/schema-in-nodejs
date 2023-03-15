const mongoose=require('mongoose');

const validationUser=new mongoose.Schema({
    
    email:{type:String,required:true,unique:true},
    password:{type:String,require:true}
}) 
module.exports=mongoose.model("validation",validationUser)