function mergeArrayAlt(arr1: number[], arr2: string[], arr3?: string[]): any[] {
	const longestLength = Math.max(arr1?.length, arr2?.length, arr3 ? arr3?.length : 0);
	longestLength
	const result = []
	for (let i = 0; i < longestLength; i++) {
		if (arr1.length) {
			result.push(arr1[0]);
			arr1.shift();
		}

		if (arr2.length) {
			result.push(arr2[0]);
			arr2.shift();
		}

		if (arr3?.length) {
			result.push(arr3?.[0]);
			arr3?.shift();
		}
	}
	return result;
}

console.log(
	// mergeArrayAlt([1,2,3], ['x', 'y', 'z']), // [1, “x”, 2, “y”, 3, “z”]
	// mergeArrayAlt([1,2,3], ['a', 'b']), // [1, “a”, 2, “b”, 3]
	// mergeArrayAlt([1,2,3], ['x', 'y', 'z'], ['a', 'b']), // [1, “x”, “a”, 2, “y”, “b”, 3, “z”]
);
