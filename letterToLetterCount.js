/*
THE GOAL IS TO:
- create function
- check that input meets criteria
- return prompt to enter correct type of input when needed
- create storage for obj/dict to output
- take a string
- split the string
- loop through array of letters
- assign variable value of letter
- handle inconsistent casing
- handle invalid characters
- skip invalid chars
- use the letter as key in obj/dict
- count the occurrences of the letter in the string
- use the count as the value for each letter
- return obj/dict for output
- console log output

note: this is practice for solving the first part of scrabble solver .. . thanks danny🤓
*/

// can we refactor our for loop to use object.keys instead

function getLetterToLetterCount(word) {
  const wordObj = {};
  let letterArr = word.split("");
  for (let i = 0; i < letterArr.length; i++) {
    const letter = letterArr[i];
    if (wordObj[letter] === undefined) {
      wordObj[letter] = 1;
    } else {
      wordObj[letter]++;
    }
  }
  return wordObj;
}
// console.log(getLetterToLetterCount("apple"));

/*
THE GOAL IS TO:
- fn that accepts two letter objects
- in fn there must be enough random letters to create sought word  ... this requires a count of valid letters available to create the word
- fn returns a boolean that states true or false that can make the word with available letters
*/
// const scrabbleLetters = getLetterToLetterCount("awepples");
// const validWord = getLetterToLetterCount("apples");
function canWordBeCreated(scrabbleLetters, validWord) {
  let canCreateWord = true;
  for (const [key, value] of Object.entries(validWord)) {
    if (scrabbleLetters[key] === undefined || scrabbleLetters[key] < value) {
      canCreateWord = false;
      break;
    }
  }
  return canCreateWord;
}
// console.log(canWordBeCreated(scrabbleLetters, validWord));

/*
Write a function that takes a string availableLetters as an argument and returns an array of all of the words that can be made from only thoseletters. Letters can be re-used as many times as needed and can appear in any order. Not all of the letters in availableLetters have to be used. */
const fs = require("fs");
const wordArr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

function getPossibleWords(availableLetters) {
  const result = [];

  const availableLettersObj = getLetterToLetterCount(availableLetters);

  for (let i = 0; i < wordArr.length; i++) {
    const word = wordArr[i];
    const validWordObj = getLetterToLetterCount(word);
    if (canWordBeCreated(availableLettersObj, validWordObj)) {
      result.push(word);
    }
  }
  return result;
}
// console.log(getPossibleWords("AAH"));

/*
NEW HELPER FN
- for loop through words in validWordObj
- read each letter of each word
- check if there is a score for the word
- if not add the value of the first letter
- thereafter add the value of each additional letter
- output a tally for the word

EXPECTED OUT
[{ word: "AA", score: 2 }, { word: "AAH", score: 6 }]
*/
const scores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

function getWordScore(word) {
  let tallyPerWord = 0;

  for (const letter of word) {
    if (letter in scores) {
      tallyPerWord = tallyPerWord + scores[letter];
    }
  }
  return tallyPerWord;
}
console.log(getWordScore("SUPERCALIFABULOUSDELICIOUSAWESOMEDOCIOUS"));
