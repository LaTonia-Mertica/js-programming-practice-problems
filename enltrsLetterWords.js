/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/
/*
- arrange file system to access/read data provided in txt file
- create array to store words that meet criteria
- create variable assigned permissible letters
- for loop to access each word in array
- variable assigned value of each word
- inner loop each word to access each letter
- variable assigned value of each letter of each word
- compare each letter to permissible letters
- when letter found that is not in list of permissible letters stop that loop and go to next word
- otherwise if that word has not been skipped per previous step THEN
  check that also at the end of that word AND if at end of that word 
  this means that word has only letters in the permissible list 
- push words that meet criteria to array created to store them
- console log
*/

const fs = require("fs");
const wordStringsFromSowpods = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordsArrayFromSowpodsStrings = wordStringsFromSowpods.split("\n");

const wordsCreatedFromSomeOrAllSpecifiedLetters = [];
const specifiedLetters = ["E", "N", "L", "T", "R", "S"];

for (let i = 0; i < wordsArrayFromSowpodsStrings.length; i++) {
  const word = wordsArrayFromSowpodsStrings[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];

    if (!specifiedLetters.includes(letter)) {
      break;
    } else if (j === word.length - 1) {
      wordsCreatedFromSomeOrAllSpecifiedLetters.push(word);
    }
  }
}

console.log({ wordsCreatedFromSomeOrAllSpecifiedLetters });
