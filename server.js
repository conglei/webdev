/**
 * User: conglei
 * Date: 17/07/13
 * Time: 13:51
 */

var fs = require("fs");
var host = "127.0.0.1";
var port = 8080;
var express = require("express");
var formidable = require("formidable");
var util = require("util");
var app = express();

var t = 0;

app.use(express.static(__dirname)); //use static files in ROOT/public folder


app.get("/", function(request, response){ //root dir
    response.redirect("/index.html")
});

app.get('/getdata/data', function(req,res){
    var query = req.query;
//    console.log(query);
    var num = query['num'];
    var output = [];
    for (var i = 0; i < num; i++){
        output.push(
            {
                time : t++,
                value : Math.random() * 100
            }
        );
    }
    res.send(output);
    res.end();
});



app.listen(port, host);