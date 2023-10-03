const express = require("express");

const app = express();

const firstHandler = (req, res, next) => {
  console.log("First handler");
  next();
};
const secondHandler = (req, res) => {
  console.log("Second handler");
  res.send("Response from Express");
};

app.get("/", firstHandler, secondHandler);

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
