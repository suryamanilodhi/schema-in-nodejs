const express=require('express');
const app=express(); 

const mongoose=require('mongoose');
const Router=require('./Route/ProductRoute'); 
const userRouter=require('./Route/UserRout');
const storeRouter=require('./Route/storeRoute');
const loginRouter=require('./Route/loginRoute');




app.use(express.json());
mongoose.connect('mongodb+srv://papa:papa@cluster0.1kuipkr.mongodb.net/test')
.then(()=>console.log("mongodb is connectd"))
.catch((err)=>console.log(err.message));

app.use("/api",Router);
app.use("/api",userRouter)
app.use("/api",storeRouter)
app.use("/api",loginRouter)
// app.use()




app.listen(4000,(err)=>{
if(!err){
    console.log("server is running");
}
if(err){
    console.log("setver not started yet");
}
})