
const path = require("path");
const express = require('express');
const submittedRouter = express.Router();
const rootDir = require('../Utils/pathUtils');


submittedRouter .post("/submitted", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "../views/submitted.html"));
   
});

module.exports = submittedRouter;