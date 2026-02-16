const path = require("path");
// External Module
const express = require('express');
const welcomeRouter = express.Router();

welcomeRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/add-home.html")
  );
});

module.exports = welcomeRouter;


