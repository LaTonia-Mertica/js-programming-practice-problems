/* 
QUESTION
[ ] What are all of the words that contain the word CAT and are exactly 5 letters long? 
*/

/*
[x] arrange file system to read data from provided text edit file
[x] create array to store word that meet criteria
[x] for loop through array of words created by file system
[x] variable as shorthand for each word
[x] set inclusion criteria
[x] store words that meet criteria in array
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

const cat5LetterWords = [];

for (let i = 0; i < wordsInArray.length; i++) {
  let word = wordsInArray[i];
  if (word.includes("CAT") && word.length === 5) {
    cat5LetterWords.push(word);
  }
}
console.log({ cat5LetterWords });
