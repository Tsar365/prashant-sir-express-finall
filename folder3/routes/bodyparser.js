// External Module
const express = require('express');
const bodyParser = require('body-parser'); //default hole eta use kra lage na

const app = express();


app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
})

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/submitted" method="POST">   //submit dle directly /submitted e jabe and method POST hobe
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
    `);
});

app.use(bodyParser.urlencoded());
//default hisebe "app.use(express.urlencoded()); " use kra zy. tkhn "const bodyParser = require('body-parser');" dya lage



app.post("/submitted", (req, res, next) => {    //post na dle ze keui /submitted e access niye nibe 
  console.log("Handling /submitted for POST", req.url, req.method, req.body);  //Handling /submitted for POST /submitted POST { name: 'one', email: 'iostream365@gmail.com' }
  res.send(`<h1>We will contact you shortly</h1>`);
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});