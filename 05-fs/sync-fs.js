const fs = require("fs");

//Avoid usinc sync methods! They are blocking!
try {
  fs.writeFileSync("./first.txt", "First from file text");
  console.log("File first.tst created successfully");
  fs.appendFileSync("./first.txt", "\nOne more line");
  console.log("Append to file first.tst successfully");
  fs.renameSync("./first.txt", "./renamed-first.txt");
  console.log("Rename file successfully");
} catch (err) {
  console.log(err);
}
