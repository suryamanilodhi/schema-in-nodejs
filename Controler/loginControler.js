const loginUser=require('../Model/loginModel');
const jwt=require("jsonwebtoken");
const { findOne } = require('../Model/loginModel');





exports.register=async(req,res)=>{
   try {
     const data=req.body;
     const logindata=await loginUser.create(data);
     return res.status(200).json({
        success:true,
        message:"user registerd successfully",
        data:logindata
     })
   } catch (error){
    return res.status(400).json({
        success:false,
        message:error.message
        
    })
   }
} 



exports.logIn = async function(req,res){
   try {
      let email = req.body.email

      let getUser = await loginUser.findOne({email : email})
      if(!getUser) return res.status(400).send({success : false,message : "please register yourself"})

      let token = jwt.sign({userId :getUser._id,password : getUser.password},"secretKey")
      if(!token) return res.status(400).send({success : false,message : "token is geneated"})

      return res.status(200).send({success : true,message : "successfully logedIn user",data :getUser,token })

   } catch (error) {
      return res.status(400).json({
         success:false,
         message:error.message
   })
}
}
exports.updatePasword = async function(req,res){
   try {
      let email = req.body.email

      let checkUser =  await loginUser.findOne({email : email})

      if(!checkUser) return res.send({message : "user is not registerd please register"})


      let token = req.headers["auth"]
      // console.log(token)
      let decodedToken = jwt.verify(token,"secretKey")

      // console.log(decodedToken)

      if(checkUser._id.toString() !== decodedToken.userId.toString()){
       return res.send({message  : "please enter correct user id"})
      }

      let update = await loginUser.findOneAndUpdate({email : email},{$set : {password : req.body.password}},{new : true})
      return res.status(200).send({message : "success",data :update })

   } catch (error) {
      return res.status(400).json({
         success:false,
         message:error.message,
         isvalid : "not authorize"
   })
      
   }
}

// module.exports = {logIn}