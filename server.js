var express = require("express");
var path = require("path");
var bodyParser = require ('body-parser');

var PORT = process.env.PORT || 3000 ;
var app = express();

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  