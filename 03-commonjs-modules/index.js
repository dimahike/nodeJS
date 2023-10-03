// console.log(arguments.callee.toString());

// console.log("Dima");

// console.log(module);

// console.log(__filename);
// console.log(__dirname);
// console.log(exports);
// console.log(module.exports);
// console.log(exports === module.exports);

// console.log(require);

// console.log(require.extensions);

const { myName, myHobbies, myFavoriteNumber } = require("./multiple-exports");
const {
  myName: myOtherName,
  myFriendsName,
  myGreatHobbies,
} = require("./exports-and-imports");
const greetingFn = require("./my-modules/single-exports");
// DON'T USE ABSOLUTE PATHS. It will not work on other machines.
// const greeting = require("/Users/dima/WebstormProjects/node/03-commonjs-modules/single-exports");

// Imports from multiple-exports.js
console.log(myName, "myName");
console.log(myHobbies, "myHobbies");
console.log(myFavoriteNumber, "myFavoriteNumber");

// mutates array in multiple-exports.js module!
myHobbies.push("sleeping");

// Imports from single-exports.js
console.log(greetingFn, "greeting");
greetingFn(myName);

// IMports from exports-and-imports.js
console.log(myOtherName, "myOtherName");
console.log(myFriendsName, "myFriendsName");
console.log(myGreatHobbies, "myGreatHobbies");
