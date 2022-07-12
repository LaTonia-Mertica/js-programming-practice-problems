/*
fn: 
- input of array of numbers
- input k, which is number of largest elements from initial 
- output new array
*/
const numArr = [1, 2, 3, 44, 0, 887, 101, 9023, -5];

// console.log(getLargestNumbersFromArray());

function getLargestNumbersFromK(arr, k) {
  arr.sort(function (a, b) {
    return a - b;
  });

  return numArr.slice(k);
}
console.log(getLargestNumbersFromK(numArr, -3));
