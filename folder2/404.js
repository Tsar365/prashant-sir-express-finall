const express = require('express');
const notFoundRouter = express.Router();


notFoundRouter .use((req, res, next) => {
  res.status(404).send("<h1>404 Your page is not found on airbnb</h1>");  //res.status(404) diye status code set kora hoyeche, jeta client ke bole dey je requested resource ta server e nai. na dle 200 ase mane request ta successful chilo, kintu resource ta server e nai. tai 404 diye status code set korechi
});

module.exports = notFoundRouter;