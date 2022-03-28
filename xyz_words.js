/* 
QUESTION
[ ] What are all of the words containing an X and a Y and a Z? 
*/

/*
[x] arrange file system to read data provided in text edit file
[x] create array to store words that meet criteria
[x] for loop through array of words craeted by file system to access each word
[x] variable to shorthand for each word accessed through iteration
[x] set inclusion criteria
[x] store words that meet criteria in the words array
[x] console log
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArr = wordsAsStrings.split("\n");

const xyzWordsArray = [];

for (let i = 0; i < wordsInArr.length; i++) {
  let word = wordsInArr[i];
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    xyzWordsArray.push(word);
  }
}
console.log({ xyzWordsArray });
