var express = require("express");
var app = express();
var request = require("request");

app.set("view engine","ejs");

app.get("/",function(req,res) {
    res.render("search");
})

app.get("/result",function(req,res) {
    var searchTerm = req.query.search;
    var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAUYHglv5zYXxB7r9w3SAQlLlpD6f0ZaaI&cx=004841306812345338799:d2wbqpqxzsg&q=" + searchTerm;
    request(url,function(error,response,body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            console.log("Result Passed " + searchTerm);
            console.log(data.items)
            res.render("result",{data:data});
        }
        else {
            res.send("No search was not found");
        }
    });
});

app.listen(3000,function(req,res) {
    console.log("listening on port 3000");
})