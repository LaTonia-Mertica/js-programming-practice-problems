/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/
/*
[x] arrange file system to read data from provided words list
[x] create array to store words that meet criteria
[x] for loop to access each word in words list
[x] variable as shorthand for each word
[x] inner for loop to access each letter in each word
[x] variable as shorthand for each letter in each word
[x] set exclusions to skip words that don't meet criteria
[x] check if went to end of each word
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

const wordsContainingRSTLNEOnly = [];
const specifiedLettersArray = ["R", "S", "T", "L", "N", "E"];

for (let i = 0; i < wordsInArray.length; i++) {
  let word = wordsInArray[i];
  for (let j = 0; j < word.length; j++) {
    let letter = word[j];
    if (!specifiedLettersArray.includes(letter)) {
      break;
    } else {
      if (j === word.length - 1) {
        wordsContainingRSTLNEOnly.push(word);
      }
    }
  }
}
console.log({ wordsContainingRSTLNEOnly });
