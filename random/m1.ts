function approve(persons: string[]) {
	if (!persons?.length) {
		return 'no one approve this';
	}
	const legnth = persons.length || 0;

	let middlePhrase;
	switch (legnth) {
		case 1:
			middlePhrase = '';
			break;
		case 2:
			middlePhrase = `and ${persons[1]}`;
			break;
		case 3:
			middlePhrase = `${persons[1]} and ${persons[2]}`;
			break;
		default:
			middlePhrase = `${persons[1]} and 2 others`;
			break;
	}

	return `
	${persons[0]}${legnth > 2 ? ',' : ''} ${middlePhrase} approve${legnth === 1 ? 's': ''} this
	`;
}

console.log(
	// approve([]),
	// approve(['Niaw']),
	// approve(['Niaw', 'Ake']),
	// approve(['Niaw', 'Ake', 'First']),
	// approve(['Niaw', 'Ake', 'First', 'Chok']),
);
