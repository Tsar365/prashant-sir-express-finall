// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtils");

userRouter.use( (req, res) => {
console.log("404 route accessed");
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));

});

module.exports = userRouter;