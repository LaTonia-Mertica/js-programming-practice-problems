/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/

/*
[x] arrange file system to read data from text edit file provided
[x] create array to store words that meet criteria
[x] for loop through words array created by file system
[x] create variable to represent each word iterated
[x] create array to store only letters each word must have
[x] inner for loop to iterate each word to access each letter
[x] create variable to represent each letter of each word
[x] set exclusion criteria
[x] ensure iterate length of each word
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsArray = wordStrings.split("\n");

const estlnrOnlyWords = [];
const mustHaveLetters = ["E", "S", "T", "L", "N", "R"];

for (let i = 0; i < wordsArray.length; i++) {
  let word = wordsArray[i];
  for (let j = 0; j < word.length; j++) {
    let letter = word[j];
    if (!mustHaveLetters.includes(letter)) {
      break;
    } else {
      if (j === word.length - 1) {
        estlnrOnlyWords.push(word);
      }
    }
  }
}
console.log({ estlnrOnlyWords });
