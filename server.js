var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 3000 ;
var app = express();

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



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

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCharacter);
  
    characters.push(newCharacter);
  
    res.json(newCharacter);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  