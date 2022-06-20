const fs = require("fs");
const wordArray = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

/*
THE GOAL
Produce:
    - helper fn to determine if a word contains other words / return bool
    - fn that outputs words found in other words
    ** do not include in the output the original word(s) 
*/
const words = [
  "DRECK",
  "ERD",
  "FABY",
  "GEEK",
  "HOW",
  "IT",
  "LOWS",
  "ODDITY",
  "OPLO",
  "SHOP",
  "SUPER",
  "SUPERGEEKDRECKFAMYOULOWSHOWUS",
  "UL",
  "US",
  "YOU",
  "ZAPERA",
  "ZOPLO",
];

// helper fn option
function hasWordsInWord(str, arr) {
  for (const word of arr) {
    if (str.includes(word) && str !== word) {
      return true;
    }
  }
  return false;
}
console.log(hasWordsInWord("ODDITY", words));
console.log(hasWordsInWord("AIRRAMP", words));

// another option
const wordsInWord = [];
for (const word1 of words) {
  for (const word2 of words) {
    if (word1.includes(word2) && word1 !== word2) {
      wordsInWord.push(word2);
    }
  }
}
console.log(wordsInWord);
