import EventEmitter from "events";

const myEmitter = new EventEmitter();

myEmitter.on("myEvent", () => console.log("First event listener!"));
myEmitter.on("myEvent", () => console.log("Second event listener!"));

myEmitter.on('otherEvent', () => console.log('Other event listener!'));


// default max listeners is 10
console.log(
  myEmitter.getMaxListeners() + "\t\t" + "default max event listeners",
);
myEmitter.setMaxListeners(25);
console.log(
  myEmitter.getMaxListeners() + "\t\t" + "custom max event listeners",
);

console.log(myEmitter.eventNames(), "\t\t" + "event names");

setTimeout(() => myEmitter.emit("myEvent"), 1000);
