// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");

// getting routes
const routes = require("./routes");

// Requiring passport as we've configured it
var passport = require("./config/passport");

// User img upload packages (Called elsewhere, kept here for organization)
// const path = require('path');
// const multer = require('multer');

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3001;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "ayyylmao", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Define API routes here
app.use(routes);


// Syncing our sequelize models and then starting our Express app
// =============================================================
/////////////////////////////////////////////////////////////////
///////////////REMOVE FORCE TRUE BEFORE PRODUCTION///////////////
/////////////////////////////////////////////////////////////////

db.sequelize.sync({ force: true }).then(function() { 
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// External CDNs can be linked in the ___ file, and static assets 
// placed in the ___ folder, that will not be processed by Babel or Webpack.