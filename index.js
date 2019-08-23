const express = require('express');

const app = express();

app.use("/",(req,res)=>{
res.send("Hello My Mster is SEUNG HYUN Yun");
})
app.listen("5000",()=>{
    console.log("port is 5000");
})