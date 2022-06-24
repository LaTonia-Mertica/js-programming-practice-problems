// object with scores
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
  _: 0,
};

/*
THE GOAL:
- helper fn to get count of letters
*/
// fn
// input one string
// creates letter object
// outputs object with key-value pairs of letter to letter frequency

function countOfLettersByWord(str) {
  const lettersObj = {};
  for (const letter of str) {
    if (!lettersObj[letter]) {
      lettersObj[letter] = 1;
    } else {
      lettersObj[letter]++;
    }
  }
  return lettersObj;
}
// console.log(countOfLettersByWord("MAKSHEF___ISHJYESBT"));

/*
THE GOAL:
- helper fn to get if inputted word can be made
- input of two objs
- output bool re: whether word can be made
*/
// fn
// two params that are both an obj
// lettersObj: an object that contains available letters in scrabble rack
// inputObj: an object that contains the word you want to check against the rack
// checks if input can be created per available chars/letters in letters object
// isValidWord fn returns bool re: whether can make the word

function isValidWord(lettersObj, inputObj) {
  let numBlanks = 0;
  if (lettersObj["_"]) {
    numBlanks = lettersObj["_"];
  }
  for (const [key, value] of Object.entries(inputObj)) {
    if (!lettersObj[key] || lettersObj[key] < value) {
      if (numBlanks < 1) {
        return false;
      }
      numBlanks--;
    }
  }
  return true;
}
const lettersObj = countOfLettersByWord("_T____T");
const inputObj = countOfLettersByWord("ATTEMPT");
// console.log(isValidWord(lettersObj, inputObj));

/*
THE GOAL:
- fn
- input a string
- creates letter to letter frequency object for letters available and each word in data source array
- checks if word(s) can be created from letters available
- tallies and assigns score to words made
- return array containing word with its score 
*/

const fs = require("fs");
const arrayOfScrabbleWords = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");
// console.log({ arrayOfScrabbleWords });

// manageable data source array
// const wordList = [
//   "BYE",
//   "HEY",
//   "HELLO",
//   "HI",
//   "HOWDY",
//   "GOODDAY",
//   "LATER",
//   "MORNING",
//   "EVENIN",
//   "NITENITE",
//   "NEXTTIME",
//   "OUT",
//   "SEEYA",
// ];

function getWordsCanCreate(availableLetters) {
  const wordsMade = [];
  const availableLettersObj = countOfLettersByWord(availableLetters);

  for (const word of arrayOfScrabbleWords) {
    const wordObj = countOfLettersByWord(word);
    if (isValidWord(availableLettersObj, wordObj)) {
      wordsMade.push(word);
    }
  }

  const wordWithScoreArr = [];
  for (const word of wordsMade) {
    let wordScore = 0;
    for (const letter of word) {
      wordScore = wordScore + scores[letter];
    }
    wordWithScoreArr.push({ word: word, score: wordScore });
  }
  return wordWithScoreArr;
}
console.log(getWordsCanCreate("L_T"));

/*
THE GOAL: INCORPORATE BLANK TILES

Extend the script to handle blank tiles. When reading the input, the character _ can be used as a wildcard — it can represent any letter.

Wildcards do not count towards a word's score.

- tell program that underscore symbol means any letter can be used in that place
- assign value of wild card to zero
- handle up to as many blank tiles as are added
*/
