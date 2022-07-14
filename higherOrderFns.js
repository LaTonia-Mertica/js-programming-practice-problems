/*
fn: apply
- takes two arguments ... (func, arr)
- func manipulates a number
- arr is array of numbers
- main function takes the inner fn and applies manipulation to each number in array and return a new array with new values

- DO ONE FOR DOUBLING EACH NUMBER
- DO ONE WITH MULTIPLICATION
- DO ONE WITH EXPONENTIAL
*/
function apply(_doubleNum, arr) {
  const result = [];

  for (const num of arr) {
    result.push(doubleNum(num));
  }
  return result;
}
console.log("\nBASIC APPLY FN\n", apply(doubleNum(), [1.5, 5, 6.5]));

// each manipulation fn with specified apply usage
// DOUBLE
function doubleNum(num) {
  return num + num;
}
// test
// console.log(doubleNum(3.5));

// test
function applyDouble(_doubleNum, arr) {
  const output = [];

  for (const num of arr) {
    output.push(doubleNum(num));
  }

  return output;
}
console.log("\nAPPLY DOUBLE FN\n", applyDouble(doubleNum(), [9, 8, 7]));

// MULTIPLY
function multiplyBy(num) {
  return num * 0.25;
}
// test
// console.log(multiplyBy(1));

// test
function applyMultiply(_multiplyBy, arr) {
  const output = [];

  for (const num of arr) {
    output.push(multiplyBy(num));
  }
  return output;
}
console.log("\nAPPLY MULTIPLY FN\n", applyMultiply(multiplyBy(), [5, 7, 9]));

// EXPONENT
function exponentialOfN(num) {
  return Math.pow(num, num);
}
// test
// console.log(exponentialOfN(2));

// test
function applyExponent(_exponentialOfN, arr) {
  const output = [];

  for (const num of arr) {
    output.push(exponentialOfN(num));
  }
  return output;
}
console.log(
  "\nAPPLY EXPONENT FN\n",
  applyExponent(exponentialOfN(), [-1, 0, 1]),
  "\n"
);
