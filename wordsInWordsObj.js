const fs = require("fs");
const wordArray = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

/*
THE GOAL
Produce an object that:
    - has as the key(s) each word that contains other words 
    - has as the value(s) all words contained within that word
    ** do not include in the value array the original word 
*/

//const sample = ["PI", "NE", "APP", "LES", "APPLE", "PINE", "PINEAPPLES"];

function getWordsInMainWord(arr) {
  const wordsObj = {};
  const innies = [];

  for (const mainWord of arr) {
    for (const innerWord of arr) {
      if (mainWord === innerWord) {
        break;
      } else if (mainWord.includes(innerWord)) {
        innies.push(innerWord);
      }
      if (!wordsObj[mainWord]) {
        wordsObj[innerWord] = mainWord;
      }
    }
  }
  return wordsObj;
}
console.log(
  getWordsInMainWord(["PI", "NE", "APP", "LES", "APPLE", "PINE", "PINEAPPLES"])
);
