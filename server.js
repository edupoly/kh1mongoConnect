var express = require('express')
var app = express();
app.get("/",(req,res)=>{
    res.send("HI... Please wait")
})
app.listen(5500,()=>{console.log('server running on 5500')})