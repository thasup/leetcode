function longest(s1, s2) {
	const arr = s1.split('').concat(s2.split(''))
	const set = new Set(arr);
	const newArr = Array.from(set);

	return newArr.sort().join('');
}

console.log(
	longest("aretheyhere", "yestheyarehere"),
	longest("bcac", "efd"),
	longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
);