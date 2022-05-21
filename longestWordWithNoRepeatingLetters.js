/*
What is the longest word that has no repeating letters?

PSEUDOCODE
- file system
- variable to store longest word
- for loop to access each word
- inner loop to access each letter
- check length of word for longest
- check if each word has a letter that repeats
- if letter repeats continue/skip
- otherwise store word that meets criteria
- console log

... need no letters more than once
- check if it has a letter
- if it has a letter check if it has that letter again
- if it has that letter again break/skipp the word
- if it does not have the letter again store the word
*/

const fs = require("fs");
const sowpodsStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const sowpodsArr = sowpodsStr.split("\n");

function hasDuplicates(str) {
  const letterToCountDict = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letterToCountDict[letter] === undefined) {
      letterToCountDict[letter] = 1;
    } else {
      letterToCountDict[letter]++;
      return true;
    }
  }
  return false;
}
//console.log(hasDuplicates());

let longestWordWithNoRepeatingLetters;
for (let i = 0; i < sowpodsArr.length; i++) {
  const word = sowpodsArr[i];
  if (hasDuplicates(word) === false) {
    if (
      !longestWordWithNoRepeatingLetters ||
      word.length > longestWordWithNoRepeatingLetters.length
    ) {
      longestWordWithNoRepeatingLetters = word;
    }
  }
}
console.log({ longestWordWithNoRepeatingLetters });
