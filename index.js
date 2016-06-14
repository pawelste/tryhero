
console.log("Node app started");


var express = require("express");
var app = new express();

app.use(function(req,res,next){
    console.log("Request ",req.url)
});

app.all("/",function(req,res){
    req.send("Response")
});


app.listen(3000, function () {
    console.log("HTTP Srv started at port " + 3000);
});
