"use strict";

console.log('Node app started');


var express = require('express');
var lodash = require('lodash');
let app = new express();

app.use(function(req,res,next){
    console.log('Request ',req.url);
    next();
});

app.all("/",function(req,res){
    res.send('Response ' + (new Date()).toLocaleString())
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log("HTTP Srv started at port " + port);
});
