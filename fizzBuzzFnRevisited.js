/*
fizzBuzz

3 and 5 are magic numbers.

Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.

NOTE: this challenge courtesy App Academy https://open.appacademy.io/learn/full-stack-online/javascript/intro-javascript-problems--part-1-
*/
function fizzBuzz(array) {
  const divsBy3Arr = [];
  const divsBy5Arr = [];

  for (let n = 0; n < array.length; n++) {
    if (array[n] % 3 === 0 && array[n] % 5 !== 0) {
      divsBy3Arr.push(array[n]);
    } else if (array[n] % 5 === 0 && array[n] % 3 !== 0) {
      divsBy5Arr.push(array[n]);
    }
  }
  return `NUMS DIVISIBLE BY 3: ${divsBy3Arr} \nNUMS DIVISIBLE BY 5: ${divsBy5Arr}`;
}
// expect 3s array = 3, 6, 9, 12
// expect 5s array = 5, 15, 10, 25
console.log(fizzBuzz([3, 6, 9, 12, 15, 5, 10, 15, 20, 25, 44, 67, 112]));
