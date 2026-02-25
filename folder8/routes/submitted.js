const express = require('express');
const userRouter = express.Router();
const submittedController = require("../controller/submitted");

userRouter.post("/submitted", submittedController.submitted);

exports.registerHomes = submittedController.registerHomes;
exports.userRouter = userRouter;
