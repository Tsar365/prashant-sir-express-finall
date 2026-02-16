
const path = require("path");
const express = require('express');
const submittedRouter = express.Router();


submittedRouter .post("/submitted", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  res.sendFile(path.join(__dirname, "../views/submitted.html")
   
  );
});

module.exports = submittedRouter;