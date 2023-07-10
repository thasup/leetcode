/*
 * Question : Square(n) Sum
 *
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/
function squareSum(numbers = []) {
  return numbers.reduce((sum, val) => sum + (val * val), 0);
}

console.log(
	squareSum([1,2]),
	squareSum([0,3,4,5]),
	squareSum([]),
)