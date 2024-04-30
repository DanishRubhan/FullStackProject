const express=require("express");
const app=express();


app.get('/',(req,res)=>{
    res.send({"Danish" : "Software Engineer"})
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,(req,res)=>{
    console.log("Listening to port 5000")
});