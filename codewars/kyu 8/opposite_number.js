/*
 * Question : Opposite number
 *
 * Very simple, given an integer or a floating-point number, find its opposite.
*/
function opposite(number = 0) {
  return number - (2 * number);
}

console.log(
	opposite(4533),
	opposite(-0.45),
)