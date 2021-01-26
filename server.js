
const express = require("express");
const exphbs = require("express-handlebars");
const router = require('./controllers/burgers_controller.js');


const app = express();


const PORT = process.env.PORT || 4200;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(router);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  