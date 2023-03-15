const UserDetails=require('../Model/UserModel');

exports.createUser=async(req,res)=>{
    try {
        const user=req.body;
        const userdata=await UserDetails.create(user);
        return res.status(200).json({
            success:true,
            message:"user created successfully",
            data:userdata
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message

        })
    }
}  
exports.getUser=async(req,res)=>{
  try {
    const getUser=await UserDetails.find({_id:req.params._id});
    return res.status(200).json({
        success:true,
        message:"user fetched successfully",
        data:getUser
    })
  } catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message
    })
  }
} 

exports.getAlluser=async(req,res)=>{
try {
     const getall=await UserDetails.find();
     return res.status(200).json({
        success:true,
        message:"all user fetched successfully",
        data:getall

     })
} catch (err) {
    return res.status(400).json({
        success:false,
        message:err.message

    })
}
} 
exports.updateUser=async(req,res)=>{
try {
     const update=await UserDetails.findByIdAndUpdate({_id:req.params._id},{$set:{name:req.body.name,number:req.body.number}}) 
     return res.status(200).json({
        success:true,
        messaage:"user uptate successfully",
        data:update
     })
} catch (error) {
  return res.status(400).json({
    success:false,
    message:error.message
  })  
}

} 

exports.deleteUser=async(req,res)=>{
    try {
         const deleteUser=await UserDetails.findByIdAndDelete({_id:req.params._id}) 
         return res.status(200).json({
            success:true,
            messaage:"user deleted successfully",
            data:deleteUser
         })
    } catch (error) {
      return res.status(400).json({
        success:false,
        message:error.message
      })  
    }
    
    }