const storeDetails=require("../Model/storeModel");  
const mongoose = require("mongoose")

exports.createStore=async(req,res)=>{
   try {
        const store=req.body;
        const{storeName,seller,location,city,pinCode,nearBy,State,country,fromDay,toDay,fromTime,toTime} = store
        store.workingDays={
            fromDay:fromDay,
            toDay:toDay,
            fromTime:fromTime,
            toTime:toTime
        }
        const storeData=await storeDetails.create()
        return res.status(200).json({
            suceess:true,
            message:"store created successfully",
            data:storeData
        })
   } catch (error) {
    return res.status(400).json({
        success:false, 
        message:error.message

    })
   }
}

exports.readStore=async(req,res)=>{
    try {
        const read=await storeDetails.findById({_id:req.params._id}) 
        return res.status(200).json({
            success:true,
            message:"data is fetched successfully",
            data:read
        })
    } catch (error) {
     return res.status(400).json({
        success:false,
        message:error.message
     })   
    }
}
exports.readAll=async(req,res)=>{
try {
    const readall=await storeDetails.find()
    return res.status(200).json({
        success:true,
        message:"all data of store fetched successully",
        data:readall
    })
} catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message
    })
}

} 

exports.updateStore=async(req,res)=>{
try {
    const data = req.body
    const{storeName,seller,location,city,pinCode,nearBy,State,country,fromDay,toDay,fromTime,toTime}=data
    // console.log(data)
    const storedata=await storeDetails.findOneAndUpdate({_id:req.params._id},{$set:{storeName:storeName,seller:seller,location:location,city:city,pinCode:pinCode,nearBy:nearBy,State:State,country:country,fromDay:fromDay,toDay:toDay,fromTime:fromTime,toTime:toTime
}},{new:true}) 
    if(storedata==null){
        res.status(404).json({
            success:false,
            message:"invalid data which you have entered"
        })
    }
    
    return res.status(200).json({
        success:true,
        message:"store updated successfully",
        data:storedata
    })
    }
catch (error) {
    return res.status(400).json({ 
        success:false,
        message: "Invalid Id",
        // message:error.message
    })
}
}

exports.deleteStore=async(req,res)=>{
     try {
        const datetedata=await storeDetails.findByIdAndDelete({_id:req.params._id}) 
        return res.status(200).json({
            success:true,
            message:"store deleted successfully",
            data:datetedata
        })
     } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
     } 

}