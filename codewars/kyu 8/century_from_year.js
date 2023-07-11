/*
 * Question : Century From Year
 *
 * The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
*/
function century(year = 0) {
	if (year < 100) {
		return 1;
	} else if (year % 100) {
		return +year.toString().slice(0, -2) + 1;
	}
	return +year.toString().slice(0, -2);
}

console.log(
	century(1705),
	century(1900),
	century(2000),
	century(89),
	century(40589),
)