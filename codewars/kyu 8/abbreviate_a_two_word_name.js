/*
 * Question : Abbreviate a Two Word Name
 *
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
 * The output should be two capital letters with a dot separating them.
*/
function abbrevName(name){
	const [ firstName, lastName ] = name.split(" ");
	return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`
}