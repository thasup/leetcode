/*
 * Question : Get the Middle Character
 *
 * You are going to be given a word. Your job is to return the middle character of the word.
 * If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/
function getMiddle(s = "")
{
  const length = s.split("").length;
  return length % 2 ? s.charAt(Math.floor(length / 2)) : s.slice((length / 2) - 1, ((length / 2) + 1));
}

// 5
console.log(
	getMiddle("test"),
	getMiddle("testing"),
	getMiddle("middle"),
)

const x ="test".slice(1,3)
x