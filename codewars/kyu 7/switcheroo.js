/*
 * Question : Switcheroo
 *
 * Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa).
 * Leave any incidence of c untouched.
*/
function switcheroo(x = ""){
	return x.split('').map(v => v === 'c' ? 'c' : ( v === 'a' ? 'b' : 'a' )).join('');
}

console.log(
	switcheroo("abc"),
	switcheroo("aaabcccbaaa"),
	switcheroo("ccccc"),
)

console.log(
	switcheroo("abc") === "bac",
	switcheroo("aaabcccbaaa") === "bbbacccabbb",
	switcheroo("ccccc") === "ccccc",
)