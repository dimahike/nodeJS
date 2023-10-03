const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Response from Express");
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});

// const server = http.createServer(app);
//
// server.listen(4000, () => {
//   console.log("Server listening on port 4000");
// });
