/* 
QUESTION
[ ] What are all of the words containing UU? 
*/

/*
[x] arrange file system to read data in text edit file
[x] create array to store words that meet criteria
[x] for loop through words in array
[x] set inclusion criteria
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

const uuWordsArray = [];

for (let i = 0; i < wordsInArray.length; i++) {
  let word = wordsInArray[i];
  if (word.includes("UU")) {
    uuWordsArray.push(word);
  }
}
console.log({ uuWordsArray });
