const express = require("express");
const router = require("./routes");

const app = express();

app.use(router);

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
