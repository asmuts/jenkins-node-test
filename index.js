const express = require("express");

console.log("Starting up");
console.log("NODE_ENV = " + process.env.NODE_ENV);

const app = express();

require("./startup/logging")(app);
require("./startup/routes")(app);

app.get("/", function (req, res) {
  res.send("Jenkins Node Test App");
});

// app.listen(process.env.PORT || 3000);

console.log("Finish: index.js require and app use.");

module.exports = app;
