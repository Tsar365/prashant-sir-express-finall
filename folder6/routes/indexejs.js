// External Module
const express = require('express');
const userRouter = express.Router();
const path = require("path"); 


const {registerHomes} = require("./submitted");


userRouter.get("/ejs", (req, res) => {
  console.log("Register Homes with ejs:", registerHomes);
  res.render('home', { registerHomes: registerHomes, title: "Airbnb Home" });
 
});

module.exports = userRouter;

