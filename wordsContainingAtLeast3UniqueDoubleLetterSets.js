/*
What are all of the words that have at least 3 different double letters? 
For example, “BOOKKEEPER” is an answer to this question because it has a double-O, a double-K, and a double-E.

- for loop to access each word
- storage for double letter sets
- storage for words that meet criteria
- for loop to access each letter
- check for double letters
- store letters that double in each word
- check the number of sets of double letters
- ensure check whole word
- console log

- refactor initial solution to fn
- then call that fn to output words that meet criteria
*/

const fs = require("fs");
const wordArr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

const wordsMeetingCriteria = [];
for (const word of wordArr) {
  const doubleLetterSetsArr = [];

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (word.includes(letter + letter)) {
      if (!doubleLetterSetsArr.includes(letter)) {
        doubleLetterSetsArr.push(letter);
      }
    }
    if (i === word.length - 1) {
      if (doubleLetterSetsArr.length >= 3) {
        wordsMeetingCriteria.push(word);
      }
    }
  }
}
console.log({ wordsMeetingCriteria });

// given a word return bool based on if word has 3 sets of double letters
function doesWordContaining3SetsOfDoubleLetters(word) {
  const doubleLetterSetsArr = [];

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (word.includes(letter + letter)) {
      if (!doubleLetterSetsArr.includes(letter)) {
        doubleLetterSetsArr.push(letter);
      }
    }
    if (i === word.length - 1) {
      if (doubleLetterSetsArr.length >= 3) {
        return true;
      }
    }
  }
  return false;
}
console.log(doesWordContaining3SetsOfDoubleLetters("BOOKKEEPER"));

// call fn to output words that meet criteria
const wordsThatMeetCriteria = [];
for (const word of wordArr) {
  if (doesWordContaining3SetsOfDoubleLetters(word) === true) {
    wordsThatMeetCriteria.push(word);
  }
}
console.log({ wordsThatMeetCriteria });
