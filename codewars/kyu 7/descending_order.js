/*
 * Question : Descending Order
 *
 * Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
 * Essentially, rearrange the digits to create the highest possible number.
*/
function descendingOrder(n = 0){
	return +[...n.toString()].sort((a, b) => b - a).join('');
}

console.log(
	descendingOrder(4240),
	descendingOrder(452452),
	descendingOrder(123456789),
)

console.log(
	descendingOrder(4240) === 4420,
	descendingOrder(452452) === 554422,
	descendingOrder(123456789) === 987654321,
)