// External Module
const express = require('express');

const app = express();


// app.use( (req, res, next) => {
//   console.log("Came in first middleware", req.url, req.method);
//    res.send("<p>Came from first Middfjhntrtynm64 jkhdjklleware</p>");
// next();

//   next();  dlei crash krbe. Cz response already send krse. So next() call krle error dibe. So next() call krar por response send krte parbe na.
// });


app.use("/", (req, res, next) => {  // "/" default. mane zekhane zekhane / ase sobgulai show krbe. Example: / , /abc , /anything  sobgulai show krbe. 
  console.log("Came in first  middleware", req.url, req.method);
  next();
});


app.use("/submitted", (req, res, next) => {   //just /submitted e asle ei middleware e asbe. /submitted/anything e asle ei middleware e asbe. but /anything e asle ei middleware e asbe na. 

  console.log("Came in second middleware", req.url, req.method);

  // Came in first  middleware / submitted GET
  // Came in second middleware / GET

  res.send("<p>Came from second Middleware</p>");
});


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});






// Every browser automatically looks for a small icon file called favicon(the small icon in the browser tab).
// Even if you did NOT create it, the browser still tries to find: http://localhost:3002/favicon.ico
// Since you don't have that route or file, Express still logs it because app.use() catches all requests.


// 🧠 Important Thing
// app.use() runs for every request path:
//     /
//     / favicon.ico
//     / anything
//     / abc
// everything
// That’s why you see it twice.


// 🚀 Final Understanding
// It runs twice because:
// 1 request = your page
// 1 request = browser asking for favicon automatically
// You didn’t request it manually — the browser did.