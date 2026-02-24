const path = require("path"); 
const rootDir = require("../utils/pathUtils");



const form = (req, res) => {
  console.log("Form route accessed");
  // res.sendFile(path.join(rootDir, "views", "form.html"));  //form.html file thakle eta use hoitpo, but amra ejs use kortesi tai niche er line ta use korbo
  res.render(path.join(rootDir, "views", "form.ejs"), { title: "Register Your Home" });


}

exports.form = form;