const fs = require("fs");
const sowpodsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const sowpodsArray = sowpodsStrings.split("\n");

/*
.filter()
*/
// practice one
console.log("\n");
const getWordsContainingErs = sowpodsArray.filter((word) =>
  word.includes("ERS")
);
console.log({ getWordsContainingErs });
// practice two
const findWordsOver15LettersWithIndexOf = sowpodsArray.filter(
  (word) => word.length >= 15 && word.charAt(0) === "L"
);
console.log({ findWordsOver15LettersWithIndexOf });
// practice three
const wordsThatArePalindromes = sowpodsArray.filter(
  (word) => word === word.split("").reverse().join("")
);
console.log({ wordsThatArePalindromes });

/*
.forEach()
*/
// practice one
console.log("\n");
let wordCount = 0;
sowpodsArray.forEach((word) => {
  wordCount++;
});
console.log({ wordCount });
// practice two
sowpodsArray.forEach((word) => {
  if (word.includes("WOOZ")) {
    console.log(`${word}🥴`);
  }
});
// practice three
sowpodsArray.forEach((word) => {
  if (word === word.split("").reverse().join("") && word.endsWith("S")) {
    console.log({ word });
  }
});

/*
.map()
*/
// practice one
console.log("\n");
const sampleData = [0, 3, 8, -2, 44];
const outputData = sampleData.map((i) => i ** 7);
console.log({ outputData });
// practice two
const outputWords = sowpodsArray.map((words) => words + "!");
console.log({ outputWords });
// practice three
const sampleNonSpecific = [5055921346, 110126523, 9823578483];
const outputSpecific = sampleNonSpecific.map(
  (j) => j - (1000000 * 0.025) / 100
);
console.log({ outputSpecific });

/*
.reduce()
*/
// practice one
console.log("\n");
const nums = [0, 1, 2];
const startingValue = 0;
const resultWithStartingValue = nums.reduce(
  (previous, current) => previous + current,
  startingValue
);
console.log({ resultWithStartingValue });
// practice two
const numbers = [1, 2, 3];
const initialValue = 1;
const calculationIncludingInitialValue = numbers.reduce(
  (previous, current) => current - previous,
  initialValue
);
console.log({ calculationIncludingInitialValue });
// practice three
const moreNumbers = [4, 5, 6, 8, 9];
const numStartWith = 7;
const resultAfterApplyNumStartWith = moreNumbers.reduce(
  (previous, current) => previous * current,
  numStartWith
);
console.log({ resultAfterApplyNumStartWith });

/*
.sort()
*/
// practice one
console.log("\n");
const evenBigNums = [2200, 8800, 17600, 4400];
// sorts by first number lowest to largest
console.log({ evenBigNums });
evenBigNums.sort();
// sorts in reverse largest to smallest
evenBigNums.reverse();
console.log({ evenBigNums });
// note: sort not ideal for numbers
// note: sort is ideal for strings
// practice two
const sortedDogWords = [];
for (const word of sowpodsArray) {
  if (word.includes("DOG")) {
    sortedDogWords.push(word);
  }
}
console.log(sortedDogWords.sort());
// practice three
// compare function is workaround to sort numbers
// switch i and j to control ascending versus descending
const points = [100, 67, 3, 88, 43, 29, 2, 217, 900, 714, 0, 11, 312];
points.sort(function (i, j) {
  return j - i;
});
console.log({ points });
