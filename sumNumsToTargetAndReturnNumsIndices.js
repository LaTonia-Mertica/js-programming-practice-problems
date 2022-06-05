/*
Write a function that:
- has params of array and target ... both of number values
- checks the array of numbers for two numbers that when summed equal the target value
- return the indices of those two numbers

note: ensure the solution handles all cases (is not hardcoded)
*/

function getSummedNumsIndices(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(getSummedNumsIndices([3, 44, 22, 2, 101, 27, 0], 44));

// another option
function getIndicesOfSummedNums(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(getIndicesOfSummedNums([3, 43, 20, 2, 101, 24, 0], 44));

// one more option
const sumTwoNums = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return { idxI: i, idxJ: j };
      }
    }
  }
};
console.log(sumTwoNums([50, 0, 94, 3, 144, 17, 67], 144));
