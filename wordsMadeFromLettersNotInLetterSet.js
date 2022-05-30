/*
[x] What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. 

from😳 to ..🤓 🥸 . did it again!

[x] What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.
 
from😳 to ..🤓 🥸 . did it again!
*/

const fs = require("fs");
const wordStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArr = wordStr.split("\n");

const wordsMadeFromLettersNotInLetterSet = [];
for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("S") &&
    !word.includes("H") &&
    !word.includes("R") &&
    !word.includes("T") &&
    !word.includes("N")
  ) {
    wordsMadeFromLettersNotInLetterSet.push(word);
  }
}
console.log({ wordsMadeFromLettersNotInLetterSet });

let longestWordFromLettersNotInLetterSet;
let allLongestWordsFromLettersNotInLetterSet = [];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("S") &&
    !word.includes("H") &&
    !word.includes("R") &&
    !word.includes("T") &&
    !word.includes("N")
  ) {
    if (
      !longestWordFromLettersNotInLetterSet ||
      word.length > longestWordFromLettersNotInLetterSet.length
    ) {
      longestWordFromLettersNotInLetterSet = word;
      allLongestWordsFromLettersNotInLetterSet = [word];
    } else if (word.length === longestWordFromLettersNotInLetterSet.length) {
      allLongestWordsFromLettersNotInLetterSet.push(word);
    }
  }
}
console.log(
  { longestWordFromLettersNotInLetterSet },
  { allLongestWordsFromLettersNotInLetterSet }
);
