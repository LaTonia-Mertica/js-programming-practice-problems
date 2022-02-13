/*
SUM OF RANGE

- create range fn that takes two arguments start and end
- fn must return array containing all numbers from start to end inclusive
- create sum fn that takes array of numbers and returns their sum
- then modify fn to take third argument
- third argument must set step value used when building the array
*/

// step assigned condition of start less than end (before question mark) then expression (between question mark and colon) to execute if condition is true/truthy then expression (after colon) to execute if the condition is false/falsy
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  // while value of step is greater than zero
  if (step > 0) {
    // add items to array when item less than or equal to value of step
    for (let r = start; r <= end; r += step) array.push(r);
    // otherwise add items to array when item greater than or equal to value of step
  } else {
    for (let r = start; r >= end; r += step) array.push(r);
  }
  return array;
}

// fn to tally values of items in array
function sum(array) {
  // initialize total at value 0
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
