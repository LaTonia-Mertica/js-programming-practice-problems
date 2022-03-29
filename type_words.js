/* 
QUESTION
[ ] How many words contain the substring "TYPE”? 
*/

/*
[x] arrange file system to access data in provided text edit file
[x] create variable to store words that meet criteria
[x] for loop through array of words created by file system
[x] create variable assigned value of words iterated
[x] set inclusion criteria
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordsAsStrings.split("\n");

const typeWords = [];
let typeWordsCount = 0;

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (word.includes("TYPE")) {
    typeWordsCount++;
    typeWords.push(word);
  }
}
console.log({ typeWordsCount });
console.log({ typeWords });
