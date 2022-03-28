/* 
QUESTION
[ ] What are all of the words with no vowel and not even a Y? 
*/

/*
[x] arrange to read data using file system
[x] create array to store words that meet criteria
[x] for loop through words array created by file system
[x] create array to store vowels including letter y
[x] create variable to store each word
[x] inner for loop to access each letter of each word
[x] create variable to store each letter
[x] set exclusion criteria using array of vowels
[x] ensure have iterated length of each word
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordsAsStr = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsArray = wordsAsStr.split("\n");

const noVowelsNotEvenYWords = [];
const vowels = ["A", "E", "I", "O", "U", "Y"];

for (let i = 0; i < wordsArray.length; i++) {
  let word = wordsArray[i];
  for (let j = 0; j < word.length; j++) {
    let letter = word[j];
    if (vowels.includes(letter)) {
      break;
    } else {
      if (j === word.length - 1) {
        noVowelsNotEvenYWords.push(word);
      }
    }
  }
}
console.log({ noVowelsNotEvenYWords });
