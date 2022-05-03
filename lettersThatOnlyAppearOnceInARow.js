/*
 What are all of the letters that never appear consecutively in an English word? 
*/

const fs = require("fs");
const wordStrs = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsArr = wordStrs.split("\n");

const allWords = [];
allWords.push(wordStrs);

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
const lettersThatMeetCriteria = [];

for (const letter of alphabet) {
  for (const word of allWords) {
    if (word.includes(letter + letter)) {
      break;
    } else {
      lettersThatMeetCriteria.push(letter);
    }
  }
}
console.log({ lettersThatMeetCriteria });
