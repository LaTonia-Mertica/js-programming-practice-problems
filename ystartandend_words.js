/* 
QUESTION
[ ] What are all of the words that start and end with a Y? 
*/

/*
[x] arrange file system to read data from text edit file with data
[x] create array to store words that meet criteria
[x] for loop through words array created by file system
[x] declare variable assigned value of each word
[x] set inclusion criteria to check each word against
[x] store eac word that meets criteria
[x] console log array of words that meet criteria
*/

const fs = require("fs");
const wordsAsStr = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArr = wordsAsStr.split("\n");

const yStartAndEndWords = [];

for (let i = 0; i < wordsInArr.length; i++) {
  let word = wordsInArr[i];
  if (word.startsWith("Y") && word.endsWith("Y")) {
    yStartAndEndWords.push(word);
  }
}
console.log({ yStartAndEndWords });
