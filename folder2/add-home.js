// External Module
const express = require('express');
const welcomeRouter = express.Router();

welcomeRouter.get("/add-home", (req, res, next) => {
  res.send(
    `<h1> Register your home here: </h1>
     <form action="/submitted" method="POST">
       <input type="text" name="housename" placeholder="Enter the name of your house" />
       <input type="submit" />
     </form>
    `
  );
});

module.exports = welcomeRouter;


