/*
 * Question : Grasshopper - Summation
 *
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/
function summation(num = 0) {
	const numbers = [...Array(num)].map((num, index) => index + 1);
	console.log(numbers);
	return numbers.reduce((sum, val) => sum + val, 0);
}

console.log(
	summation(1),
	summation(2),
	summation(8),
)