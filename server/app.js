var express = require("express"),
    bodyparser = require("body-parser"),
    mongoose = require("mongoose"),
    app = express();

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/speculator_app", { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect("mongodb://localhost:27017/speculator_app",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     }).then(() => {
//         console.log("Connected to DB!");
//     }).catch(err => {
//         console.log("ERROR: ", err.message);
//     });

// Schema
var schema = new mongoose.Schema({
    title: String, 
    description: String,
    body: String
});

var Speculator = mongoose.model("Speculator", schema);

Speculator.create({
    title: "new thing ",
    description: "here will be the info",
    body: "body"
},
    function (err, post) {
        if (err) {
            console.log(err);
        } else {
            console.log("New post created");
            console.log(post);
    }
});

//Default route 
app.get("/", function (req, res) {
    res.send("Hello, welcome to the landing page!!");
});

//SHOW route
app.get("/posts", function (req, res) {
    res.send("This is the posts page");    
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server listening at port " + port);
});