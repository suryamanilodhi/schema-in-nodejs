const productDetail=require('../Model/ProductModel');

exports.createProduct=async(req,res)=>{
  try {
    const product=req.body;
    const b=await productDetail.create(product)
    return res.status(200).json({
        success:true,
        meassage:"data is created successfully",
        data:b
    })
  } catch (error) {
    return res.status(400).json({
        success:false,
        meassage:error.message
    })
  }
}

exports.getProduct =async(req,res)=>{ 
    try {
        const item=await productDetail.find({_id:req.params._id});
        return res.status(200).json({
            success:true,
            message:"product fetched successfullY",
            data:item
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            meassage:error.message
        })
    }
}

exports.getAllProduct =async(req,res)=>{
try {
    const getProduct=await productDetail.find()
    return res.status(200).json({
        success:true,
        message:"all product fetched successfully",
        data:getProduct
    })
    
} catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message
    })
}
}
exports.UpadteProduct =async(req,res)=>{
try {
    const UpadteProducts=await productDetail.findByIdAndUpdate({_id:req.params._id},{$set:{name:req.body.name,price:req.body.price}},{new : true}) 
    console.log(UpadteProducts)
    // console.log(req.params._id);
    return res.status(200).json({
      success:true,
      messaage:"product update successfully",
      data:UpadteProducts
    })
} catch (error) {
    return res.status(500).json({
  success:false,
  message:error.message
    })
}
}
 


exports.deleteProduct =async(req,res)=>{
    try {
        const deleteProducts=await productDetail.findByIdAndDelete({_id:req.params._id}) 
        return res.status(200).json({
          success:true,
          messaage:"product deleted successfully",
          data:deleteProducts
        })
    } catch (error) {
        return res.status(400).json({
      success:false,
      message:error.message
        })
    }
    }
   
    exports.deleteAll=async(req,res)=>{
        try {
            let datas=await productDetail.deleteMany()
            // datas = [];
            // const data = await productDetail. 
            return res.status(200).json({
                success:true,
                message:"data has deleted successfully",
                data:datas
            })
        } catch (error) {
            return res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }

