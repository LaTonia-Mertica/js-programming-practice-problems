/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/

// set up file system to read data set from text edit file
// create array to store words that meet criteria
// for loop to iterate through array
// variable shorthand for words iterated
// inner for loop to access each letter of each word
// set exclusions to skip words that don't meet criteria
// set condition to check end of word reached
// store words that meet criteria
// console log

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = wordsAsStrings.split("\n");

const specifiedLettersOnlyWords = [];

for (let i = 0; i < wordsByLine.length; i++) {
  let word = wordsByLine[i];
  for (let j = 0; j < word.length; j++) {
    if (
      !(word[j] === "R") &&
      !(word[j] === "S") &&
      !(word[j] === "T") &&
      !(word[j] === "L") &&
      !(word[j] === "N") &&
      !(word[j] === "E")
    ) {
      break;
    } else {
      if (j === word.length - 1) {
        specifiedLettersOnlyWords.push(word);
      }
    }
  }
}
console.log({ specifiedLettersOnlyWords });
