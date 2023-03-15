const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema
const ProductDetails=new mongoose.Schema({
    name:String,
    price:Number,
    review:Number,
    discription:String,
    userId:{
    type:ObjectId,
    ref: "User"
}



})
module.exports=mongoose.model("product",ProductDetails)  