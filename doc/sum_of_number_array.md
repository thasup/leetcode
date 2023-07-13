### There are several ways to find the sum of an array of numbers in JavaScript.
Here are a few common approaches:

1. **For Loop**: Iterate over the array and accumulate the sum by adding each element to a running total.

```javascript
/**
 * Calculates the sum of an array of numbers using a for loop.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} The sum of the numbers in the array.
 */
function sumUsingForLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

```

2. **For...of Loop**: Iterate over the array using a for...of loop and add each element to the sum.
```javascript
/**
 * Calculates the sum of an array of numbers using a for...of loop.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} The sum of the numbers in the array.
 */
function sumUsingForOfLoop(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

```

3. **Array Reduce**: Use the reduce method of the array to accumulate the sum.
```javascript
/**
 * Calculates the sum of an array of numbers using the reduce method.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} The sum of the numbers in the array.
 */
function sumUsingReduce(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

```
