/*
LIST

- create function named arrayToList that builds a list structure 
- function must use as an argument [1, 2, 3] 
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
- create listToArray function that produces an array from a list
- then add helper function prepend and nth
- then create a recursive version of nth

note: prepend takes an element and a list and creates a new list that adds the element to the front of the input list
************************************************************
note: nth takes  a list and a number and returns the element at the given position in the list or undefined when no such element exists
*/

function arrayToList(array) {
  let list = null;
  for (let l = array.length - 1; l >= 0; l--) {
    list = { value: array[l], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
