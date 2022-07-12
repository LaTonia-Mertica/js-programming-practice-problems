/*
ZIP FN

PART 1
- create basic zip function

function zip(a, b) {
  // code here
}
console.log(zip([1, 2, 3], [4, 5, 6]) === [[1, 4], [2, 5], [3, 6]])

hint: two arrays that convert into an array of arrays with pairs by index

PART 2
- handle when arr1 is longer than arr2
- return null in place of non value

PART 3
- Handle when arr2 is longer than arr1
- return null in place of non value
*/

function zipArrays(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    // const number = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      // const letter = arr2[j];
      if (i === j) {
        result.push([arr1[i], arr2[j]]);
      }
    }
  }
  return result;
}
console.log("\nBASIC ZIP FN\n", zipArrays([1, 2, 3], ["A", "B", "C"]), "\n");

function zipArrays(arr1, arr2) {
  const result = [];

  if (arr2.length > arr1.length) {
    let diff = arr2.length - arr1.length;
    diff = null;
    arr1.push(diff);
  }

  for (let i = 0; i < arr1.length; i++) {
    let idxNum = arr1[i],
      idxLet = arr2[i];

    if (idxNum === undefined) {
      idxNum = null;
    }

    if (idxLet === undefined) {
      idxLet = null;
    }

    result.push([idxNum, idxLet]);
  }
  return result;
}
console.log(
  "ARRAY ONE LONGER\n",
  zipArrays([1, 2, 3, 4], ["A", "B", "C"]),
  "\n"
);
console.log(
  "ARRAY TWO LONGER\n",
  zipArrays([1, 2, 3], ["A", "B", "C", "D", "E", "F"]),
  "\n"
);
