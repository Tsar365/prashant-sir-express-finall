// const path = require("path");
// const rootDir = require("../utils/pathUtils");


// const {registerHomes} = require("./submitted");
// const Home = require("../models/home");

// const ejs = (req, res) => {

//   const registerHomes = Home.fetchAll((registeredHomes) => {
//     res.render("home", {
//       registeredHomes: registeredHomes,
//       pageTitle: "airbnb Home",
//     });
//   });

// }

// exports.ejs = ejs;





const Home = require("../models/home");

const ejs = (req, res) => {
  Home.fetchAll((registeredHomes) => {
    res.render("home", {
      registeredHomes: registeredHomes,
      title: "Registered Homes",
      pageTitle: "airbnb Home",
    });
  });
};


exports.ejs = ejs;