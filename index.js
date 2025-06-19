
require("dotenv").config()
const express=require("express");
// import express from "express";

const app=express()
const port=4000

app.get('/',  (req, res)=>{
     res.send("hello express");
})

app.get('/login',(req,res)=>{
    res.send("i am login")
})

app.get("/chai",(req,res)=>{
    res.send("<h1>please login at chai aur code</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`);  
})

