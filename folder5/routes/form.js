// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path"); 
const rootDir = require("../utils/pathUtils");

userRouter.get("/form", (req, res) => {
console.log("Form route accessed");
  res.sendFile(path.join(rootDir, "views", "form.html"));
 

});

module.exports = userRouter;