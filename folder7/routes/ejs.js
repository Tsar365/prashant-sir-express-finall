// External Module
const express = require('express');
const userRouter = express.Router();
// const path = require("path"); 
const ejsController = require("../controller/ejs");



userRouter.get("/ejs", ejsController.ejs);

module.exports = userRouter;

