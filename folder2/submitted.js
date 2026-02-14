const express = require('express');
const submittedRouter = express.Router();


submittedRouter .post("/submitted", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  res.send(
    `<h1> Registertion successfully </h1>
      <a href="/">Go back to Home</a>
    `
  );
});

module.exports = submittedRouter;