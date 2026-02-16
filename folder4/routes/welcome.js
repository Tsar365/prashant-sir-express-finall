
const path = require("path");
// External Module
const express = require('express');
const welcomeRouter = express.Router();
const rootDir = require('../Utils/pathUtils');

welcomeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "../views/welcome.html"));
  
});

module.exports = welcomeRouter;