/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/

/*
[x] arrange file system to read data in text edit file
[x] create array to store words that meet criteria
[x] create array to contain only letters word must have
[x] for loop through words array created by file system to access each word
[x] declare variable to store/rep each word iterated
[x] for loop through each word to access each letter
[x] declare variable to store/rep each letter iterated
[x] set exclusion criteria to skip non-pertinent words
[] set word length criteria to ensure checked whole word
[] left w/b words that meet criteria so store them in array
[] console log array of words that meet criteria
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

const nelrtsOnlyWords = [];
const mustHaveLettersArr = ["N", "E", "L", "R", "T", "S"];

for (let i = 0; i < wordsInArray.length; i++) {
  let word = wordsInArray[i];
  for (let j = 0; j < word.length; j++) {
    let letter = word[j];
    if (!mustHaveLettersArr.includes(letter)) {
      break;
    } else {
      if (j === word.length - 1) {
        nelrtsOnlyWords.push(word);
      }
    }
  }
}
console.log({ nelrtsOnlyWords });
