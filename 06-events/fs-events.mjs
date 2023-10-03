import EventEmitter from "events";
import fs from "fs";

const fileEmitter = new EventEmitter();

const filePath = "./first.txt";

fileEmitter.on("writeComplete", () => {
  console.log(`File ${filePath} created successfully`);
  fs.appendFile(filePath, "\nOne more line", () => {
    fileEmitter.emit("appendComplete");
  });
});

fileEmitter.on("appendComplete", () => {
	console.log( `Append to file ${filePath} successfully`);
	fs.rename(filePath, "./renamed-first.txt", () => {
    fileEmitter.emit("renameComplete");
  });
});

fileEmitter.on("renameComplete", () => {
	console.log(`File ${filePath} was renamed successfully`);
});

fs.writeFile(filePath, "First from file text", () => {
  fileEmitter.emit("writeComplete");
});
