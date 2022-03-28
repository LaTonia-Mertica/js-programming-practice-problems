/* 
QUESTION
[ ] What are all of the words that have no E or A and are at least 15 letters long? 
*/

/*
[x] arrange file system to read data in provided text edit file
[x] create array to store words that meet criteria
[x] for loop array of words created by file system
[x] shorthand word with a variable
[x] if statement to set inclusion criteria ... remember 'a' or 'e' means 'a' and 'e'
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

const noaoreAtLeast15LetterWords = [];

for (let i = 0; i < wordsInArray.length; i++) {
  let word = wordsInArray[i];
  if (!word.includes("A") && !word.includes("E") && word.length >= 15) {
    noaoreAtLeast15LetterWords.push(word);
  }
}
console.log({ noaoreAtLeast15LetterWords });
