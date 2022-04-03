/*
[ ] What are all of the letters that never appear consecutively in an English word? 

For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?
*/

const fs = require("fs");
const sowpodsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const sowpodsArray = sowpodsStrings.split("\n");

let allWords = [];
allWords.push(sowpodsStrings);
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const findLettersNotConsecutiveInEnglishWords = [];

for (const letter of alphabet) {
  let doubleLettersAppear = false;
  for (const word of allWords) {
    if (word.includes(`${letter}${letter}`)) {
      doubleLettersAppear = true;
      break;
    }
  }
  if (!doubleLettersAppear) {
    findLettersNotConsecutiveInEnglishWords.push(letter);
  }
}
console.log({ findLettersNotConsecutiveInEnglishWords });
