// const path = require("path");
// const rootDir = require("../utils/pathUtils");


const {registerHomes} = require("./submitted");

const ejs = (req, res) => {
  console.log("Register Homes with ejs:", registerHomes);
  res.render('home', { registerHomes: registerHomes, title: "Airbnb Home" });

}

exports.ejs = ejs;