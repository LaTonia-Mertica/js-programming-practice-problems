/* 
QUESTION
[ ] What is the longest word that contains no vowels?
*/

/*
[x] arrange file system to read and access data in text edit file provided
[x] declare variable for longest word (initially w/o assignment)
[x] for loop through array of words created by file system
[x] declare word variable to store each word iterated per loop
[x] set criteria that word must not have any vowels
[x] set nested criteria that if longest word undefined OR
[x] word longer than current length of longest word THEN
[x] re-assign value of longest word to that of current word
[x] console log
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

let longestNoVowelsWord;

for (let i = 0; i < wordsInArray.length; i++) {
  const word = wordsInArray[i];
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (!longestNoVowelsWord || word.length > longestNoVowelsWord.length) {
      longestNoVowelsWord = word;
    }
  }
}
console.log({ longestNoVowelsWord });
