/*
Find the longest word that has each letter it contains no more than once.

PSEUDOCODE
- arrange file system
- create storage for words that meet criteria
- for loop to access each word
- inner for loop to access each letter
- check if letter is defined/recognized
- if letter s defined and in the word again, break
- if letter is in word only once and whole word has been checked then store word
- check if longest word defined
- chek if longest word is longest of words
*/
const fs = require("fs");
const wordArr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

function getWordsWithSingleLetters(arr) {
  const wordsWithSingleLetters = [];
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];

    const letterPerWordCountObj = {};

    for (let j = 0; j < word.length; j++) {
      const letter = word[j];

      if (letterPerWordCountObj[letter] === undefined) {
        letterPerWordCountObj[letter] = 1;
      } else {
        letterPerWordCountObj[letter]++;
      }

      if (letterPerWordCountObj[letter] > 1) {
        break;
      } else if (j === word.length - 1) {
        wordsWithSingleLetters.push(word);
      }
    }
  }
  return wordsWithSingleLetters;
}
console.log(getWordsWithSingleLetters(wordArr));

function findLongestWord(arr) {
  let longestWordThatMeetsCriteria;

  for (word of getWordsWithSingleLetters(arr)) {
    if (
      !longestWordThatMeetsCriteria ||
      word.length > longestWordThatMeetsCriteria.length
    ) {
      longestWordThatMeetsCriteria = word;
    }
  }
  return (
    "\nLONGEST WORD THAT MEETS CRITERIA: " + longestWordThatMeetsCriteria + "\n"
  );
}
console.log(findLongestWord(wordArr));

/*
TRACING
AA
{A: 2}
AAH
{A: 2, H: 1}
*/
