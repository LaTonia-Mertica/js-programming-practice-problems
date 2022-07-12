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

function isValidWord(lettersObj, inputObj) {
  let numBlanks = 0;
  if (lettersObj["_"]) {
    numBlanks = lettersObj["_"];
  }

  for (const [key, value] of Object.entries(inputObj)) {
    if (!lettersObj[key] || lettersObj[key] < value) {
      if (numBlanks < value) {
        return false;
      }
      numBlanks--;
    }
  }
  return true;
}

const fs = require("fs");
const sowpodsWords = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

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

// const testWords = ["AA", "ZZZ", "LET"];
function getWordsCanCreate(availableLetters, arrayOfScrabbleWords) {
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
console.log(getWordsCanCreate("L_T", sowpodsWords));
