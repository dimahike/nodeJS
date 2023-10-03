function greeting(name) {
  console.log("Hello " + name);
}

// console.log(__filename, "filename");

module.exports = greeting;

// DON'T DO THIS
// module.exports remains an empty object {}
// exports = greeting;
