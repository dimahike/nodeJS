// ReferenceError: module is not defined in ES module scope
// console.log(module)

import { season, temperature } from "./named-exports.mjs";
import { humidity as weatherHumidity, isRaining } from "./inline-exports.mjs";
import getDataFromSerever from "./default-exports.mjs";

getDataFromSerever("https://jsonplaceholder.typicode.com/posts/1").then(
	(post) => console.log(post),
);

console.log(season);
console.log(temperature);
console.log(weatherHumidity);

console.log(isRaining);
