const fs = require('fs');
const dns = require('dns');


const info = (text) => console.log(performance.now().toFixed(2), "\t\t" + text);


info('Program started');

// close events
fs.writeFile('./test.txt', 'Hello Node.js!', () => info('File written'));

// Process events
Promise.resolve().then(() => info('Promise 1'));

// Next Tick
process.nextTick(() => info('Next Tick 1'));

// setImmediate (Check)
setImmediate(() => info('Immediate 1'));

// Timeouts
setTimeout(() => info('Timeout 1'), 0);
setTimeout(() => {
	process.nextTick(() => info('Next Tick 2'));
	info('Timeout 2')
}, 100);

// Interval
let intervalCount = 0;
const intervalId = setInterval(() => {
	info(`Interval ${intervalCount += 1}`);

	if (intervalCount === 2) {
		clearInterval(intervalId);
	}
}, 50);

// input/output events
dns.lookup('localhost', (err, address, family) => {
	info('DNS 1 localhost', address)
	Promise.resolve().then(() => info('Promise 2'));
	process.nextTick(() => info('Next Tick 3'));
});

info('Program finished');