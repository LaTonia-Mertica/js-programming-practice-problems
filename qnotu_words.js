/* 
QUESTION
[ ] What are all of the words containing a Q but not a U? 
*/

/*
[x] arrange file system to read text edit file for data 
[x] create array to store words that meet criteria
[x] for loop through array created by file system to access each word
[x] create variable as shorthand for each word
[x] check for inclusion of specified letter in each word and exclusion of specified letter
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

const resultWordsArray = [];

for (let i = 0; i < wordsInArray.length; i++) {
  let word = wordsInArray[i];
  if (word.includes("Q") && !word.includes("U")) {
    resultWordsArray.push(word);
  }
}
console.log({ resultWordsArray });
