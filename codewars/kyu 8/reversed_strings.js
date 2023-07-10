/*
 * Question : Reversed Strings
 *
 * Complete the solution so that it reverses the string passed into it.
*/
function solution(str = "") {
  return [...str].reverse().join("");
}

console.log(
	solution("world"),
	solution("hello"),
)