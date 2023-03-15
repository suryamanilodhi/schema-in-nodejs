const express=require('express');
const Router=express.Router()
const {createProduct,getProduct,getAllProduct,UpadteProduct,deleteProduct,deleteAll}=require('../Controler/ProductControler')

Router.post("/create",createProduct);
Router.get("/getdata/:_id",getProduct);
Router.get("/getalldata",getAllProduct)
Router.put("/UpadteProduct/:_id",UpadteProduct);
Router.delete("/deleteProduct/:_id",deleteProduct)
Router.delete("/deleteAll",deleteAll)


module.exports=Router;