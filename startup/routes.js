const express = require("express");
const winston = require("winston");

const home = require("../routes/home");

module.exports = function (app) {
  winston.info("Start: Setting up routes");

  app.use("/", home);

  winston.info("Finish: setting up routes");
};
