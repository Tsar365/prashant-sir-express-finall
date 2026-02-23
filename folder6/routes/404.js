// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtils");

userRouter.use( (req, res) => {
console.log("404 route accessed");
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));  //404.html file thakle eta use hoitpo, but amra ejs use kortesi tai niche er line ta use korbo
  res.status(404).render(path.join(rootDir, "views", "404.ejs"), { title: "404 - Page Found" });

});

module.exports = userRouter;