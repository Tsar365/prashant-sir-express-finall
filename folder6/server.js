const express = require("express");
const parser = require("body-parser");
const path = require("path");
const form = require("./routes/form");
const index = require("./routes/index");
// const submitted = require("./routes/submitted");
const {userRouter} = require("./routes/submitted");
const error = require("./routes/404");
const indexejs = require("./routes/indexejs");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// Parse form data
app.use(parser.urlencoded({ extended: false }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));


app.use(index);
app.use(form);
app.use(userRouter)
app.use(indexejs)
app.use(error)





app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});