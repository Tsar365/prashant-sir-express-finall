// External Module
const express = require('express');
// const bodyParser = require('body-parser');
const welcome = require('./welcome');
const addHome = require('./add-home');
const submitted = require('./submitted');
const notFound = require('./404');

const app = express();



// app.get("/", (req, res, next) => {
//   console.log(req.url, req.method);
//   res.send(
//     `<h1> Welcome to airbnb </h1>
//      <a href="/add-home">Add Home</a>
//     `
//   );
// });
app.use( welcome);    




// app.get("/add-home", (req, res, next) => {
//   res.send(
//     `<h1> Register your home here: </h1>
//      <form action="/submitted" method="POST">
//        <input type="text" name="housename" placeholder="Enter the name of your house" />
//        <input type="submit" />
//      </form>
//     `
//   );
// });
app.use(addHome); 




app.use(express.urlencoded()); 

// app.post("/submitted", (req, res, next) => {
//   console.log(req.url, req.method, req.body);
//   res.send(
//     `<h1> Registertion successfully </h1>
//       <a href="/">Go back to Home</a>
//     `
//   );
// });
app.use(submitted)



// app.use((req, res, next) => {
//   res.status(404).send("<h1>404 Your page is not found on airbnb</h1>");
// });
app.use(notFound) //alwz sobar last e dte hy




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});