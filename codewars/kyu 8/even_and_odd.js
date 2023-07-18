/*
 * Question : Even or Odd
 *
 * Create a function that takes an integer as an argument
 * and returns "Even" for even numbers or "Odd" for odd numbers.
*/
function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even";
}

console.log(
  evenOrOdd(2),
  evenOrOdd(4),
  evenOrOdd(46),
  evenOrOdd(62),
  evenOrOdd(21),
  evenOrOdd(7),
)