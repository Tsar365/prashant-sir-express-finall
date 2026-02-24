// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path"); 
const rootDir = require("../utils/pathUtils");

const {registerHomes} = require("./submitted");

const homeController = require("../controller/index");


userRouter.get("/", homeController.home);

module.exports = userRouter;