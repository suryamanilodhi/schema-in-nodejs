const mongoose=require('mongoose');

const UserDetails=new mongoose.Schema({
    name:String,
    number:Number,
    address:String,
    age:Number,
    email:String
        
        

})
module.exports=mongoose.model("User",UserDetails);