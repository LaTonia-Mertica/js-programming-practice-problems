/*
[x] What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. 

[ ] What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.

from😳 to ..🤓 🥸 . did it again!
*/

const fs = require("fs");
const wordStrs = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArr = wordStrs.split("\n");

const excludedLetters = ["A", "E", "I", "O", "S", "H", "R", "T", "N"];
const wordsMadeFromExcludingLetters = [];
let longestWordMadeFromExcludingLetters;
let allLongestWordsMadeFromExcludingLetters = [];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];

    if (excludedLetters.includes(letter)) {
      break;
    } else if (j === word.length - 1) {
      wordsMadeFromExcludingLetters.push(word);
    }
  }
  if (
    !longestWordMadeFromExcludingLetters ||
    word.length > longestWordMadeFromExcludingLetters.length
  ) {
    longestWordMadeFromExcludingLetters = word;
    allLongestWordsMadeFromExcludingLetters = [word];
  } else if (word.length === longestWordMadeFromExcludingLetters.length) {
    allLongestWordsMadeFromExcludingLetters.push(word);
  }
}
console.log(
  { wordsMadeFromExcludingLetters },
  { longestWordMadeFromExcludingLetters },
  { allLongestWordsMadeFromExcludingLetters }
);
