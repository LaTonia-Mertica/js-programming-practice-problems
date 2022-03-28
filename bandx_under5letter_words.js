/* 
QUESTION
[ ] What are all of the words that have a B and an X and are less than 5 letters long? 
*/

/*
[x] arrange file system to read data from provided text edit file
[x] create array to store words that meet criteria
[x] for loop through array of words created by file system
[x] declare variable as shorthand access to each word
[x] set inclusion criteria
[x] store words that meet criteria
[] console log stored words
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

const bAndXUnder5LetterWords = [];

for (let i = 0; i < wordsInArray.length; i++) {
  let word = wordsInArray[i];
  if (word.includes("B") && word.includes("X") && word.length < 5) {
    bAndXUnder5LetterWords.push(word);
  }
}
console.log({ bAndXUnder5LetterWords });
