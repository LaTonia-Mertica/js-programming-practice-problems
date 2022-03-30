/* 
QUESTION
[ ] What is the longest AND shortest word that contains no vowels? Print word and length for each!
*/

/*
[x] arrange file system to read/access data from provided text edit file
[x] declare longest word without assignment
[x] declare shortest word without assignment
[x] for loop through array of words created by file system
[x] declare word variable assigned to iterated words
[x] set criteria that word must have no vowels
[x] set nested criteria that if longest || shortest word is undefined 
[x] OR word longer than longest word THEN
[x] OR word shorter than shortest word THEN
[x] reassign longest and shortest words to respective words
[x] console log

NOTE: had to add letter 'y' as must have to get shortest to print
*/

const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordStrings.split("\n");

let longestWordWithOutVowels;
for (let i = 0; i < wordArray.length; i++) {
  let word = wordArray[i];
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (
      !longestWordWithOutVowels ||
      word.length > longestWordWithOutVowels.length
    ) {
      longestWordWithOutVowels = word;
    }
  }
}
console.log(
  { longestWordWithOutVowels },
  longestWordWithOutVowels.length + " LETTERS LONG"
);

// const fs = require("fs");
const wordsInStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsInStrings.split("\n");

let shortestWordWithOutVowels;
for (let i = 0; i < wordsInArray.length; i++) {
  let words = wordsInArray[i];
  if (
    !words.includes("A") &&
    !words.includes("E") &&
    !words.includes("I") &&
    !words.includes("O") &&
    !words.includes("U") &&
    words.includes("Y")
  ) {
    if (
      !shortestWordWithOutVowels ||
      words.length < shortestWordWithOutVowels.length
    ) {
      shortestWordWithOutVowels = words;
    }
  }
}
console.log(
  { shortestWordWithOutVowels },
  shortestWordWithOutVowels.length + " LETTERS SHORT"
);
