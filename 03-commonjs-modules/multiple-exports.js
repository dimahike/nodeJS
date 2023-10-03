const myName = "Dima";
const myHobbies = ["coding", "reading", "gaming"];
const myFavoriteNumber = 77;

console.log("Text from the multiple-exports.js file");

module.exports.myName = myName;

exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
