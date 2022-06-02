/*
QUESTION: What is the longest word that can be made without the letters in “AEIOSHRTN”?

[x] Create function to return boolean for whether words contain letters to be excluded
[x] Create another function to return boolean for words that meet letter-exclusion criteria that 
   returns another boolean for whether the longest word is defined
[x] Create program that uses both functions to get the longest word AND ties
  
NOTES:
0. Use the scrabble words list provided in the sowpods.txt file for this program
1. Letters not in the exclusion list may repeat in words that otherwise meet the criteria
2. Words that meet the criteria may include some - not all - letters not in exclusion list
3. To tie words must not include any excluded letters and be same length as longest word
*/

const fs = require("fs");
const wordStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArr = wordStr.split("\n");

// fn one with main variable globally scoped
const wordsThatDoNotIncludeExcludedLetters = [];
function getWordsThatDoNotIncludeExcludedLetters(str) {
  const excludedLetters = ["A", "E", "I", "O", "S", "H", "R", "T", "N"];

  for (let i = 0; i < wordArr.length; i++) {
    const word = wordArr[i];
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];

      if (excludedLetters.includes(letter)) {
        break;
      } else if (j === word.length - 1) {
        wordsThatDoNotIncludeExcludedLetters.push(word);
      }
    }
  }

  if (wordsThatDoNotIncludeExcludedLetters.length !== undefined) {
    return true;
  }
  // do not return more than one datatype
  // return wordsThatDoNotIncludeExcludedLetters;
}
console.log(getWordsThatDoNotIncludeExcludedLetters(), {
  wordsThatDoNotIncludeExcludedLetters,
});

// fn two with main variable globally scoped
let longestWordThatMeetsExcludedLetterCriteria;
function getLongestWordsCreatedFromNonuseOfExcludedLetters(arr) {
  for (const word of arr) {
    if (
      !longestWordThatMeetsExcludedLetterCriteria ||
      word.length > longestWordThatMeetsExcludedLetterCriteria.length
    ) {
      longestWordThatMeetsExcludedLetterCriteria = word;
    }
  }
  if (longestWordThatMeetsExcludedLetterCriteria) {
    return true;
  }
  // do not return more than one datatype
  // return longestWordThatMeetsExcludedLetterCriteria;
}
console.log(
  getLongestWordsCreatedFromNonuseOfExcludedLetters(
    wordsThatDoNotIncludeExcludedLetters
  ),
  { longestWordThatMeetsExcludedLetterCriteria }
);

let allLongestWordsThatMeetsExcludedLetterCriteria = [];
for (let i = 0; i < wordsThatDoNotIncludeExcludedLetters.length; i++) {
  const word = wordsThatDoNotIncludeExcludedLetters[i];

  if (
    !longestWordThatMeetsExcludedLetterCriteria ||
    word.length > longestWordThatMeetsExcludedLetterCriteria.length
  ) {
    longestWordThatMeetsExcludedLetterCriteria = word;
    allLongestWordsThatMeetsExcludedLetterCriteria = [word];
  } else if (
    word.length === longestWordThatMeetsExcludedLetterCriteria.length
  ) {
    allLongestWordsThatMeetsExcludedLetterCriteria.push(word);
  }
}
console.log(
  { longestWordThatMeetsExcludedLetterCriteria },
  { allLongestWordsThatMeetsExcludedLetterCriteria }
);

if (
  getWordsThatDoNotIncludeExcludedLetters(
    longestWordThatMeetsExcludedLetterCriteria
  ) === true &&
  getLongestWordsCreatedFromNonuseOfExcludedLetters(
    wordsThatDoNotIncludeExcludedLetters
  ) === true
) {
  console.log({ longestWordThatMeetsExcludedLetterCriteria });
}
