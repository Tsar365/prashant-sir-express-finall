// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path"); 
const rootDir = require("../utils/pathUtils");

const registerHomes=[];

userRouter.post("/submitted", (req, res) => {
console.log("Submitted route accessed");
registerHomes.push({name:req.body.name, email:req.body.email, phone:req.body.phone, address:req.body.address});


  res.sendFile(path.join(rootDir, "views", "submitted.html"));
 

});

exports.registerHomes = registerHomes;
exports.userRouter = userRouter;