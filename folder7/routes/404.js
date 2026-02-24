// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtils");

const {notFound} = require("../controller/404");

userRouter.use(notFound);

module.exports = userRouter;