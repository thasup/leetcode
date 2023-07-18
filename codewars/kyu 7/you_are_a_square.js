/*
 * Question : You're a square
 *
 * Given an integral number, determine if it's a square number
*/
function isSquare(n = 0) {
	if (n === 0) {
		return true;
    }

	let i = 0;
	while (i <= n) {
		if (i === n/i) {
			return true;
		} else if (i === n) {
			return false;
        }
		i++
	}
	return false;
}

console.log(
	isSquare(-1),
	isSquare(0),
	isSquare(3),
	isSquare(4),
	isSquare(9),
	isSquare(24),
	isSquare(25),
)

console.log(
	isSquare(-1) === false,
	isSquare(0) === true,
	isSquare(3) === false,
	isSquare(4) === true,
	isSquare(9) === true,
	isSquare(24) === false,
	isSquare(25) === true,
)

