/*
QUESTION
What are all of the words that can only be made from the letters “L”, “E”, “N”, “R”, “S”, and “T”?
*/

/*
[x] arrange file system to access/read words aka data provided in text edit file
[x] create variable assigned empty array to store words that meet criteria
[x] create variable assigned array of must have only letters
[x] for loop through words array created by file system
[x] create variable assigned value of iterated words
[x] inner for loop each word to access each letter
[x] create variable assigned value of iterated letters
[x] set exclusion criteria to skip words that do not meet criteria
// [] set inclusion criteria for words made of only the must have letters
[x] ensure iterated length of each word
[x] store each word that meets criteria
[x] console log words that meet criteria
*/

const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordStrings.split("\n");

const lenrstLetterOnlyWords = [];
const onlyLettersMustHave = ["L", "E", "N", "R", "S", "T"];

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (!onlyLettersMustHave.includes(letter)) {
      break;
    } else {
      if (j === word.length - 1) {
        lenrstLetterOnlyWords.push(word);
      }
    }
  }
}

console.log({ lenrstLetterOnlyWords });
