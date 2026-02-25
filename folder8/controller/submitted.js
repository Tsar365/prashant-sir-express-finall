
const path = require("path");
const rootDir = require("../utils/pathUtils");
const Home = require("../models/home");

const submitted = (req, res) => {
  console.log("Submitted route accessed");

  const newHome = new Home(
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.address
  );


  newHome.save(); // ✅ fixed here
  res.sendFile(path.join(rootDir, "views", "submitted.html"));
};

exports.submitted = submitted;
