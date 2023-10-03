const fs = require("fs");

fs.writeFile("./first.txt", "First from file text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File first.tst created successfully");

    fs.appendFile("./first.txt", "\nOne more line", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Append to file first.tst successfully");

        fs.rename("./first.txt", "./renamed-first.txt", (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Rename file successfully");
          }
        });
      }
    });
  }
});
