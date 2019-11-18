var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 3000 ;
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "app/data/friends.js"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  