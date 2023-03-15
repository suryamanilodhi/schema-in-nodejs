const mongoose=require('mongoose');


const storeDetail=new mongoose.Schema({
    storeName:String,
    seller:String,
    location:String,
    city:String,
    pinCode:Number,
    nearBy:String,
    State:String, 
    country:String,
    workingDays:[
        {
            fromDay:String,
            toDay:String,
            fromTime:String,
            toTime:String

        }
    ]

})
module.exports=mongoose.model("store",storeDetail);