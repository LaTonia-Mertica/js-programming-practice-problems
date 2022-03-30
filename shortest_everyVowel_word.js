/* 
QUESTION
[ ] What is the shortest word that contains all 5 vowels? 
*/

/*
[x] arrange file system to access and read data in provided text edit file
[x] declare variable for shortest word w/o an assignment
[x] for loop through array of words created by file system
[x] declare variable assigned value of iterated words
[x] set criteria that every vowel must be in the word
[x] set nested criteria that if shortest word variable is undefined or if a word is less in length then reassign shortest word variable to value of current word
[x] console log
*/

const fs = require("fs");
const wordString = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordString.split("\n");

let shortestEveryVowelWord;

for (let i = 0; i < wordArray.length; i++) {
  let word = wordArray[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !shortestEveryVowelWord ||
      word.length < shortestEveryVowelWord.length
    ) {
      shortestEveryVowelWord = word;
    }
  }
}
console.log({ shortestEveryVowelWord });
