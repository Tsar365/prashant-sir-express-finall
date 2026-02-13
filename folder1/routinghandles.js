// External Module
const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
  console.log("Came in get middleware", req.url, req.method);
  //res.send("<p>Came from First Middleware</p>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in postmiddleware", req.url, req.method);
  res.send("<p>Welcome to Complete Coding Nodejs series</p>");
});

app.use("/", (req, res, next) => { //  default middleware for all routes
  console.log("Came in defauls middleware", req.url, req.method);
  res.send("<p>Came from default Middleware</p>");
});


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});