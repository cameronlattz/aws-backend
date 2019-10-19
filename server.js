const express = require("express");

//const mongoose = require("mongoose");
//const routes = require("./src/routes");
const app = express();
const PORT = process.env.PORT || 3001;
let mongooseUrl = "mongodb://localhost/greenrange";

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  mongooseUrl = "mongodb+srv://admin:betterfood@greenrange-jlv06.mongodb.net/test?retryWrites=true&w=majority";
  app.use(express.static("client/build"));
}
mongooseUrl = "mongodb+srv://admin:betterfood@greenrange-jlv06.mongodb.net/test?retryWrites=true&w=majority";
// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(mongooseUrl);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});