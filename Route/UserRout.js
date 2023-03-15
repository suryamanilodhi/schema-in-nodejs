const express=require('express');
const  Router=express.Router();

const{createUser,getUser,getAlluser,updateUser,deleteUser}=require('../Controler/UserControler');

Router.post("/createUser",createUser);

Router.get("/getuser/:_id",getUser);
Router.get("/getalluser",getAlluser);
Router.put("/updateUser/:_id",updateUser);
Router.delete("/deleteUser/:_id",deleteUser);



module.exports=Router;