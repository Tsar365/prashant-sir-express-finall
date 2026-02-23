// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path"); 
const rootDir = require("../utils/pathUtils");

const {registerHomes} = require("./submitted");


userRouter.get("/", (req, res) => {
console.log("Home route accessed");
console.log("Registered Homes in index:", registerHomes);
  // res.sendFile(path.join(rootDir, "views", "index.html"));
  res.render(path.join(rootDir, "views", "index.ejs"), { title: "Welcome to Airbnb" });
 
});

module.exports = userRouter;