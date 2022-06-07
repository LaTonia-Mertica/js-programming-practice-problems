/*
Create fn that gets specified item in array
*/
function getAllButNthItemOfArray(arr, n) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === n) {
      continue;
    }
    result.push(arr[i]);
  }
  return result;
}
console.log(
  getAllButNthItemOfArray(
    ["word", 7, false, true, "43", false, "js practice"],
    2
  )
);

// another option
function getAllExceptNthItem(arr, n) {
  // this tells the program to start at item in n position
  // then remove one item
  arr.splice(n, 1);
  return arr;
}
// should output 'Sing Your Love of JS!'
console.log(
  getAllExceptNthItem(["Hum", "If You Hate", "Your", "Love of JS!"], 1)
);
