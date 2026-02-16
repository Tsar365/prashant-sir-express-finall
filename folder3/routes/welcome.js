
const path = require("path");
// External Module
const express = require('express');
const welcomeRouter = express.Router();

welcomeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/welcome.html"));
  
});

module.exports = welcomeRouter;