function getAllIndexes(numbers: number[], type: string): number[] {
	return numbers.map((value, index) => {
		if (type === 'even' && value % 2 === 0) {
			return index
		} else if (type === 'odd' && value % 2 !== 0) {
			return index
		}
	}).filter(value => value !== undefined);
}

console.log(
	getAllIndexes([1,2,3,4], 'even'), // [1,3]
	getAllIndexes([10,11,31,5,8], 'even'), // [0,4]
	getAllIndexes([10,11,31,5,8], 'odd'), // [1,2,3]
);
