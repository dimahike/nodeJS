const mult = require('./mult');

test('multiply 3 * 2 to equal 6', () => {
	expect(mult(3, 2)).toBe(6);
});
