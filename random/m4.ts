function isInteger(number: string | number) {
	return Number(number) % 1 === 0;
}

console.log(
	isInteger(1), // true
	isInteger(1.0), // true
	isInteger(3.14), // false
	isInteger("12"), // true
	isInteger("12.2"), // false
);
