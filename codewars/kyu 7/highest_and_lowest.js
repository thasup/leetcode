/*
 * Question : Highest and Lowest
 *
 * In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 * All numbers are valid Int32, no need to validate them.
 * There will always be at least one number in the input string.
 * Output string must be two numbers separated by a single space, and highest number is first.
*/
function highAndLow(numbers = []) {
	const numArr = numbers.split(" ").map(Number);

	return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}

console.log(
	highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") === "42 -9",
	highAndLow("1 2 3") === "3 1",
)

console.log(
	highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"),
	highAndLow("1 2 3"),
)