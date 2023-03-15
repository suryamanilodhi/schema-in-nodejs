const  express=require('express'); 
const Router=express.Router()

const{createStore,readStore,readAll,updateStore,deleteStore}=require('../Controler/storeControler'); 

Router.post("/createstore",createStore) 
Router.get("/readStore/:_id",readStore)
Router.get("/readAll",readAll)
Router.put("/updateStore/:_id",updateStore)
Router.delete("/deleteStore/:_id",deleteStore)
module.exports=Router;