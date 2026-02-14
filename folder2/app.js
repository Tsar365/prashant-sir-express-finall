// External Module
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();



app.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.send(
    `<h1> Welcome to airbnb </h1>
     <a href="/add-home">Add Home</a>
    `
  );
});




app.get("/add-home", (req, res, next) => {
  res.send(
    `<h1> Register your home here: </h1>
     <form action="/submitted" method="POST">
       <input type="text" name="housename" placeholder="Enter the name of your house" />
       <input type="submit" />
     </form>
    `
  );
});



app.use(express.urlencoded());   //bodyperser er jaygay express er built in middleware use korlam

app.post("/submitted", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  res.send(
    `<h1> Registertion successfully </h1>
      <a href="/">Go back to Home</a>
    `
  );
});




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});