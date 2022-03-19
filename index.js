// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }
// main();

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("Hello world");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Hello hey</h1>");
// });
// app.get("/name/:name", function(req, res){
//    var name = req.params.name;
//    res.send("<h1>Hello " + name +"</h1>");
// });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

// app.get("/search/:name", function(req, res){
//     var name = req.params.name;
//     res.redirect('https://google.com/search?q=' + name)
//  });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


var express = require("express");
var app = express();

app.use(express.static("programming3/Gameoflife2"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

// var fs = require('fs');
// var obj = {
//    "first_name":"Vardan",
//    "last_name":"Hovsepyan",
//    "age":13,
//    "tumo_student":true
// }
// const myJSON = JSON.stringify(obj);

// function main() {
//    fs.writeFileSync("obj.json", myJSON);
//    var text = fs.readFileSync("obj.json").toString();
//    console.log(myJSON == text);
//    console.log(text);
// }
// main();
