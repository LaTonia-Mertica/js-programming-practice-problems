/*
QUESTION
What are all of the compound words? These are words made up of 2 smaller words. For example, “SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.

PSEUDOCODE
- for loop to access each word in word array
- inner for loop to access each letter of each word
- tracker to store initial letter plus each subsequent letter
- 
- check each iteration of the tracker to see if the initial through subsequent letters form a word
- when first word is formed then check if remaining letters form another word 
… ie snowman would mean checking if word.length minus charAt(0) to charAt(3) forms a separate word with charAt(4) to word.length - 1
- store words that meet the criteria
*/
const fs = require("fs");
const wordsArray = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

// controlled test case
// const sampleArr = [
//   "BOY",
//   "BUDDY",
//   "CODE",
//   "CODEWILD",
//   "OH",
//   "BUDDYBOY",
//   "OHBOY",
//   "STILL",
//   "STILLWORKS",
//   "WILD",
//   "WORKS",
// ];

const compoundWords = [];
for (let i = 0; i < wordsArray.length; i++) {
  const word = wordsArray[i];
  for (let j = 0; j < word.length; j++) {
    const firstWord = word.slice(0, j + 1);
    const secondWord = word.slice(j + 1);
    if (wordsArray.includes(firstWord) && wordsArray.includes(secondWord)) {
      compoundWords.push(word);
      break;
    }
  }
}
const timeStart = performance.now();
console.log({ compoundWords });
const timeStop = performance.now();
console.log(timeStop - timeStart + " MS RUN TIME");
