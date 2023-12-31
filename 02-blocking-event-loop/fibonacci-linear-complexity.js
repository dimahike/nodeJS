// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
const info = (text) => console.log(performance.now().toFixed(2), "\t\t" + text);

info("Program started");

setTimeout(() => console.log("setTimeout 1"), 0);

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  let fib1 = 0;
  let fib2 = 1;
  let sum;

  for (let i = 1; i < n; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }

  return sum;
}

console.log(fib(1000), "fib(1000)");

info("Program finished");
