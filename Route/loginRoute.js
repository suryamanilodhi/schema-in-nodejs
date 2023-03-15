const express=require('express');
const Router=express.Router(); 

const {register,logIn,updatePasword}=require('../Controler/loginControler'); 

Router.post("/register",register)
Router.post("/login",logIn)
Router.post("/update",updatePasword)

module.exports=Router;
