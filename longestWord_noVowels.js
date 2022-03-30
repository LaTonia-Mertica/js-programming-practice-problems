/* 
QUESTION
[ ] What is the longest word that contains no vowels?
*/

/*
[x] arrange file system to access and read data from provided text edit file
[x] declare variable to store longest word that has no vowels
[x] for loop through array of words created by file system
[x] declare variable assigned value of iterated words
[x] set criteria that if longest word variable undefined THEN
[x] reassign it to value of word
[x] set nested criteria that word must not have any vowels
[x] set nested nested criteria that if word length longer than longest word to reassign longest word to word
[x] console log
*/

const fs = require("fs");
const wordsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsArray = wordsStrings.split("\n");

let longestWordNoVowels;

for (let i = 0; i < wordsArray.length; i++) {
  const word = wordsArray[i];

  if (!longestWordNoVowels) {
    longestWordNoVowels = word;
  }
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (word.length > longestWordNoVowels.length) {
      longestWordNoVowels = word;
    }
  }
}
console.log({ longestWordNoVowels });
