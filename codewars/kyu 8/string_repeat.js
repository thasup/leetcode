/*
 * Question : String repeat
 *
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/
function repeatStr (n = 0, s = "") {
  return s.repeat(n);
}

console.log(
	repeatStr(3, "*"),
	repeatStr(5, "#"),
	repeatStr(2, "ha "),
)