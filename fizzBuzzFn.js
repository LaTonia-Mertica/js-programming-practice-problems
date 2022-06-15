/*
fizzBuzz

3 and 5 are magic numbers.

Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.

NOTE: this challenge courtesy App Academy https://open.appacademy.io/learn/full-stack-online/javascript/intro-javascript-problems--part-1-
*/
function fizzBuzz(array) {
  const numsDivisibleBy3Not5 = [];
  const numsDivisibleBy5Not3 = [];

  for (let n = 0; n < array.length; n++) {
    if (array[n] % 3 === 0 && array[n] % 5 !== 0) {
      numsDivisibleBy3Not5.push(array[n]);
    } else if (array[n] % 5 === 0 && array[n] % 3 !== 0) {
      numsDivisibleBy5Not3.push(array[n]);
    }
  }

  return (
    "NUMS DIVISBILE BY 3: " +
    numsDivisibleBy3Not5 +
    "\nNUMS DIVISIBLE BY 5: " +
    numsDivisibleBy5Not3
  );
}
console.log(fizzBuzz([3, 6, 9, 12, 15, 5, 10, 15, 20, 25]));
