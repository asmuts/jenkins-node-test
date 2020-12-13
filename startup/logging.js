require("express-async-errors");
const winston = require("winston");

module.exports = function (app) {
  const console = new winston.transports.Console({
    format: winston.format.simple(),
    level: process.env.NODE_ENV === "development" ? "debug" : "info",
  });

  winston.configure({
    transports: [console],
    rejectionHandlers: [
      new winston.transports.File({
        filename: "./var/log/rejections.log",
      }),
      console,
    ],
    exceptionHandlers: [
      new winston.transports.File({
        filename: "./var/log/uncaughtExceptions.log",
      }),
      console,
    ],
    exitOnError: false,
  });

  process.on("unhandledRejection", (ex) => {
    console.log("Unhandled Rejection at:", ex.stack || ex);
  });
};
