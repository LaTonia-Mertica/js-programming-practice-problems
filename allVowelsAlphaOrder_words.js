/* 
QUESTION
[ ] What are all of the words that have all 5 vowels, in alphabetical order? 
*/

/*
[x] arrange file system to access/read data from provided text edit file
[x] create array to store words that meet criteria
[x] for loop through aord array created by file system
[x] create variable assigned value of word
[x] set inclusion criteria that all 5 vowels must be in word
[x] set inclusion criteria that each vowel must be in proper position in word
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordStr = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArr = wordStr.split("\n");

const all5VowelsAlphaOrderWords = [];

for (let i = 0; i < wordArr.length; i++) {
  let word = wordArr[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      word.indexOf("A") < word.indexOf("E") &&
      word.indexOf("E") < word.indexOf("I") &&
      word.indexOf("I") < word.indexOf("O") &&
      word.indexOf("O") < word.indexOf("U")
    ) {
      all5VowelsAlphaOrderWords.push(word);
    }
  }
}
console.log({ all5VowelsAlphaOrderWords });
