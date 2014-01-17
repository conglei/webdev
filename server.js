/**
 * User: conglei
 * Date: 09/01/14
 * Time: 13:51
 */

var host = "127.0.0.1";
var port = 8080;
var express = require("express");
var util = require("util");
var app = express();
//
//
var t = 1;
//
////fill in here
//
//
app.use(express.bodyParser()); // parse the data
//
//

app.get("/getdata",function(req,res){
    var query = req.query;
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
//app.get('/getdata', function(req,res){
//    var query = req.query;
////    console.log(query);
//    var num = query['num'];
//    var output = [];
//    for (var i = 0; i < num; i++){
//        output.push(
//            {
//                time : t++,
//                value : Math.random() * 100
//            }
//        );
//    }
//    res.send(output);
//    res.end();
//});
//
app.get("/fake.txt", function(req,res){
    var output = "this is a fake file!";
    res.send(output);
    res.end();

});
//

app.post("/reset", function(req,res){
    var time = req.body.time;
    t = time;
    res.end();
})
//app.post("/reset", function(req,res){
//    var time = req.body.time;
//    t = time;
//    res.end()
//});
//
//
//
app.use(express.static(__dirname)); //use static files in ROOT/public folder

app.listen(port, host);

console.log("Server Started: port: 8080.....");