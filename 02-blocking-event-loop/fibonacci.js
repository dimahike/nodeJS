// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

setTimeout(() => console.log('setTimeout 1'), 0)

 function fib(n) {
	if (n ===0 || n === 1) {
		return n
	}
	return  fib(n - 1) + fib(n - 2)
}

console.log(fib(5), 'fib(5)')

// display how to calculate fib(5)
// fib(5) = fib(4) + fib(3)
// fib(4) = fib(3) + fib(2)
// fib(3) = fib(2) + fib(1)
// fib(2) = fib(1) + fib(0)
// fib(1) = 1
// fib(0) = 0
// fib(2) = 1 + 0 = 1
// fib(3) = 1 + 1 = 2
// fib(4) = 2 + 1 = 3
// fib(5) = 3 + 2 = 5