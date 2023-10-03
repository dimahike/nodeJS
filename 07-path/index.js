const path = require("path");

const filePath = "/Users/dima/WebstormProjects/node/07-path/index.js";
const textFilePath = "/Users/dima/WebstormProjects/node/file.txt";
const relativePath = "../folder/move.mov";
const directlyPath = "../folder/subfolder";

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directlyPath)); // index.js

console.log(path.dirname(filePath)); // /Users/dima/WebstormProjects/node/07-path
console.log(path.dirname(directlyPath)); // ../folder

console.log(path.resolve(relativePath)); // /Users/dima/WebstormProjects/node/folder/move.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(relativePath)); // .mov
console.log(path.extname(directlyPath)); // ''

const parsePath = path.parse(filePath);
console.log(parsePath);
/*
{
  root: '/',
  dir: '/Users/dima/WebstormProjects/node/07-path',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/

console.log(filePath);
console.log(path.join(parsePath.dir, `renamed-${parsePath.name}.mjs`));
// /Users/dima/WebstormProjects/node/07-path/renamed-index.js
