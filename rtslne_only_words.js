/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/

// read file system
// loop through words
// exclude words that do not contain specified letters
// stop loop when get to words that do not contain specified letters
// check whole word currently being looked at has ended
// save words that meet criteria
// console.log

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordPerLine = wordsAsStrings.split("\n");

const specifiedLettersArr = ["R", "S", "T", "L", "N", "E"];
const resultWordsArr = [];

for (let i = 0; i < wordPerLine.length; i++) {
  let word = wordPerLine[i];
  for (let j = 0; j < word.length; j++) {
    if (!specifiedLettersArr.includes(word[j])) {
      break;
    } else {
      if (j === word.length - 1) {
        resultWordsArr.push(word);
      }
    }
  }
}
console.log({ resultWordsArr });
