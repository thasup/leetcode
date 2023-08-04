function sumTwoSmallestNumbers(numbers = []) {
	const sortedArr = numbers.sort((a, b) => a - b);
	return sortedArr[0] + sortedArr[1];
}

console.log(
	sumTwoSmallestNumbers([5, 8, 12, 19, 22]), // 13
	sumTwoSmallestNumbers([15, 28, 4, 2, 43]), // 6
);