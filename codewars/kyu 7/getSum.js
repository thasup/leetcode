function getSum(a, b) {
	const high = a > b ? a : b;
	const low = a > b ? b : a;
	let sumArr = [];
	for (let i = low; i <= high; i++) {
		sumArr.push(i)
	}
	return sumArr.reduce((acc, curr) => acc + curr);
}

console.log(
	getSum(0, -1), // -1
	getSum(0, 1), // 1
	getSum(0, 2), // 3
	getSum(2, 2), // 2
);