/* 
QUESTION
[ ] What are all of the words with no vowel and not even a Y? 
*/

/*
[x] arrange file system to access/read data aka words from provided text edit file
[x] create empty array to store words that meet criteria
[x] for loop through words created by file system
[x] create variable assigned value of each word iterated
[x] set exclusion criteria to skip words that contain any vowel
[x] store words that meet criteria
[x] console log

NOTES:
\n means newline as in split each string onto a new line
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordsAsStrings.split("\n");

const noVowelsEvenNoYWords = [];

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];

  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    noVowelsEvenNoYWords.push(word);
  }
}
console.log({ noVowelsEvenNoYWords });
