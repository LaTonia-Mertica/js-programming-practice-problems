/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/

const fs = require("fs");
const stringsFromSowpodsWordList = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8");
const arrayOfSowpodsWords = stringsFromSowpodsWordList.split("\n");

const wordsPerCertainLettersOnly = [];
const certainLetters = ["R", "N", "E", "L", "T", "S"];

for (let i = 0; i < arrayOfSowpodsWords.length; i++) {
  const word = arrayOfSowpodsWords[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];

    if (!certainLetters.includes(letter)) {
      break;
    } else if (j === word.length - 1) {
      wordsPerCertainLettersOnly.push(word);
    }
  }
}
console.log({ wordsPerCertainLettersOnly });
