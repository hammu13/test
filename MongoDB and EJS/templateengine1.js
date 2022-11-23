var express = require('express');
var app = express();
var student = "James";

app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views"); 

app.get("/", function(req, res){
    res.render("index1", { studentname: student });
    }); 

app.listen(2000);