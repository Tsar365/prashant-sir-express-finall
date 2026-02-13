// External Module
const express = require('express');

const app = express();


app.use( (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  res.send("<p>Came from first Middleware</p>");

  // next();  dlei crash krbe. Cz response already send krse. So next() call krle error dibe. So next() call krar por response send krte parbe na.
});

app.use((req, res, next) => {  //next() na dile ei middleware e asbe na. So next() call krar por ei middleware e asbe.  
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Came from second Middleware</p>");
});


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});