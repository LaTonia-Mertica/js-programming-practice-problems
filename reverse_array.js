/*
REVERSE ARRAY

- create two functions called reverseArray and reverseArrayInPlace
- fn reverseArray takes array as argument
- fn reverseArray must produce new array w/same elements in reverse
- fn reverseArrayInPlace must modify array given as argument by reversing its elements
- do not use reverse method for either fn

- hypothesis: reverseArrayInPlace w/b more efficient
- observation: seems no difference though more coding for in place
- per timers: 
*/

function reverseArray(array) {
  let result = [];
  // for length of array starting at the end with item in array greater or equal to zero decrement the items
  for (let r = array.length - 1; r >= 0; r--) {
    // then add items to array
    result.push(array[r]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  // initialize items in array at zero at less than bottom result of length of array divided by two then increment items
  for (let r = 0; r < Math.floor(array.length / 2); r++) {
    // variable declared and assigned value of item/element in array
    let prior = array[r];

    // item/element in array reassigned to length of array minus numbr one and minus value of item/element (as accessed from array)
    array[r] = array[array.length - 1 - r];
    //item/element in array minus number 1 and value of item/element reassigned value of prior which is item/element in array
    array[array.length - 1 - r] = prior;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
