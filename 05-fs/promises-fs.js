const fs = require("fs/promises");

fs.writeFile("./first.txt", "First from file text")
  .then(() => console.log("File first.tst created successfully"))
  .then(() => fs.appendFile("./first.txt", "\nOne more line"))
  .then(() => console.log("Append to file first.tst successfully"))
  .then(() => fs.rename("./first.txt", "./renamed-first.txt"))
  .then(() => console.log("Rename file successfully"))
  .catch((err) => console.log(err));
