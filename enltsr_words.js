/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/

/*
[x] arrange file system to read data from text edit file
[x] create array to store words that meet criteria
[x] for loop to access each word
[x] variable shorthand for each word
[x] inner for loop to access each letter of each word
[x] create array to store only letters that must be included
[x] set exclusion to skip words that don't meet criteria
[x] check that whole word has been read (ensure compare index to index)
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordsAsStr = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStr.split("\n");

const lettersThatMustOnlyBeIncluded = ["R", "S", "T", "L", "N", "E"];
const enltsrWords = [];

for (let i = 0; i < wordsInArray.length; i++) {
  let word = wordsInArray[i];
  for (let j = 0; j < word.length; j++) {
    if (!lettersThatMustOnlyBeIncluded.includes(word[j])) {
      break;
    } else {
      if (j === word.length - 1) {
        enltsrWords.push(word);
      }
    }
  }
}
console.log({ enltsrWords });
