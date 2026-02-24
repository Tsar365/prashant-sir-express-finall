const path = require("path"); 
const rootDir = require("../utils/pathUtils");

const { registerHomes } = require("../routes/submitted");


const home = (req, res) => {
  console.log("Home route accessed");
  console.log("Registered Homes in index:", registerHomes);
  res.render(path.join(rootDir, "views", "index.ejs"), { title: "Welcome to Airbnb" });
}

exports.home = home;
