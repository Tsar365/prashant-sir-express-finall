// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path"); 
const rootDir = require("../utils/pathUtils");
// const {form} = require("../controller/form");  //distructure krle eta use krte hbe
const formController = require("../controller/form"); 

// userRouter.get("/form", form); distrubute korar por eta use korte hobe, karon form function ta controller theke ashtese, tai eta use korbo
userRouter.get("/form", formController.form);

module.exports = userRouter;