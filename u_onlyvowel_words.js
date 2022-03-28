/*
QUESTION
What are all of the words that have a “U” but no other vowel?
*/

// set up file system to read data from text file
// create array to store words that meet criteria
// for loop to access each word in data set
// variable as shorthand for each word iterated
// set exclusions
// set letter word must contain
// store words that meet criteria
// console log

const fs = require("fs");
const wordsInStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = wordsInStrings.split("\n");

const uAndNoOtherVowelsWords = [];

for (let i = 0; i < wordsByLine.length; i++) {
  let word = wordsByLine[i];
  if (
    word.includes("U") &&
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O")
  ) {
    uAndNoOtherVowelsWords.push(word);
  }
}
console.log({ uAndNoOtherVowelsWords });
