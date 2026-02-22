// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path"); 
const rootDir = require("../utils/pathUtils");

const registerHomes=[];

userRouter.post("/submitted", (req, res) => {
console.log("Submitted route accessed");
registerHomes.push({name:req.body.name, email:req.body.email});


  res.sendFile(path.join(rootDir, "views", "submitted.html"));
 

});

// module.exports = userRouter;
// module.exports = registerHomes;
exports.registerHomes = registerHomes;
exports.userRouter = userRouter;