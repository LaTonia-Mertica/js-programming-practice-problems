/* 
QUESTION
[ ] What is the shortest word that contains all 5 vowels? 
*/

/*
[x] arrange file system to access and read data in text edit provided
[x] declare variable to store shortest word (do not include assignment)
[x] for loop through array of words created by file system
[x] declare variable rep for each word iterated
[x] set criteria that word must have all vowels
[x] set as nested criteria that if shortest word variable is undefined OR
[x] if a word is less in length that current length value of shortest word
[x] THEN shortest word variable is to be re-assigned to current shortest word
[x] console log
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordsAsStrings.split("\n");

let shortestWordWithAllVowels;

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !shortestWordWithAllVowels ||
      word.length < shortestWordWithAllVowels.length
    ) {
      shortestWordWithAllVowels = word;
    }
  }
}
console.log({ shortestWordWithAllVowels });
