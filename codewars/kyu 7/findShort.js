function findShort(s = '') {
	const words = s.split(' ');
	let short = words[0];
	words.forEach((v) => {
		if (short.length > v.length) {
			short = v;
		}
	});

	return short.length;
}

console.log(
	findShort('The quick brown fox jumps over the lazy dog'),
	findShort("Let's travel abroad shall we"),
);
