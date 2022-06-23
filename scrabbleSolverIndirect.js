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

/*
THE GOAL:
- helper fn to get count of letters
*/
// fn
// input of string

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
console.log(countOfLettersByWord("MAKSHEFISHJYESBT"));

/*
THE GOAL:
- helper fn to get if inputted word can be made
- input of two objs
- output bool re: whether word can be made
*/
// fn
// two params that are both an obj

function isValidWord(lettersObj, inputObj) {
  for (const [key, value] of Object.entries(inputObj)) {
    if (!lettersObj[key] || lettersObj[key] < value) {
      return false;
    }
  }
  return true;
}
const lettersObj = countOfLettersByWord("MAKSHEFISHJYESBT");
const inputObj = countOfLettersByWord("MAKESHIFTY");
console.log(isValidWord(lettersObj, inputObj));

/*
THE GOAL:
- fn
- input a string
- return array of created words
- return word-to-score array 
*/

const wordList = [
  "BYE",
  "HEY",
  "HELLO",
  "HI",
  "HOWDY",
  "GOODDAY",
  "LATER",
  "MORNING",
  "EVENIN",
  "NITENITE",
  "NEXTTIME",
  "OUT",
  "SEEYA",
];

function getWordsCanCreate(availableLetters) {
  const wordsMade = [];
  const availableLettersObj = countOfLettersByWord(availableLetters);

  for (const word of wordList) {
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
console.log(getWordsCanCreate("NNEYKCHOTIEBA"));
