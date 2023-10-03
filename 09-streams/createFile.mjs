// How to run: node --experimental-modules createFile.mjs <filename> <linesQty>
import fs from "fs";
import path from "path";

if (!process.argv[2] || !process.argv[3]) {
  console.log("Filename and lines qty must be provided as arguments");
  process.exit(0);
}

const filename = process.argv[2];
const linesQty = parseInt(process.argv[3]);

if (isNaN(linesQty)) {
  console.log("Lines qty must be a number");
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.join("./files", filename));

console.log("Start", performance.now());
for (let i = 0; i < linesQty; i++) {
  writeStream.write(
    `This is line ${i + 1} in the automatically generated file\n`,
  );
}

console.log("End", performance.now());

setTimeout(() => console.log("Timeout", performance.now()), 0);

writeStream.end(() =>
  console.log(`Automatically generated file ${filename} with ${linesQty} lines was created`),
);
