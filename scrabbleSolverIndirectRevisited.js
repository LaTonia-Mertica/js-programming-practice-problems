/*
[x] fn to convert strings to objects with key for each letter and each key/letter value of how many times the letter is in the string

[x] fn to compare keys/values of random letters converted to an object and inputted string converted to an object and return boolean if the inputted string can be made from the random letters

[x] fn to output words from array that can be made from available letters

[x] fn to output score for word made
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

// HELPER FN
// takes strings
function getLetterCount(str) {
  const letterCount = {};
  // console.log({ str });
  const letters = str.split("");
  // console.log({ letters });
  for (const letter of letters) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
  return letterCount;
}
// console.log(getLetterCount("NONONSENSICAL"));

// HELPER FN
// takes objects
// does not have to call previous fn w/in
function isWordCanMake(availableLettersObj, wordObj) {
  for (const [key, value] of Object.entries(wordObj)) {
    if (!availableLettersObj[key] || availableLettersObj[key] < value) {
      return false;
    }
  }
  return true;
}
const availableLettersObj = getLetterCount("TIRELESSLY");
const wordObj = getLetterCount("TIRELESS");
// console.log(isWordCanMake(availableLettersObj, wordObj));

// FN TO CREATE WORDS & THEIR SCORES
const words = ["CODE", "STUDY", "LEARN", "DEV", "GROW", "TIRELESSLY", "HOPE"];
function wordsCreated(availableLetters) {
  const createdWords = [];
  const availableLettersObj = getLetterCount(availableLetters);
  // console.log({ availableLettersObj });

  for (const word of words) {
    // console.log({ word });
    const wordObj = getLetterCount(word);
    if (isWordCanMake(availableLettersObj, wordObj)) {
      createdWords.push(word);
    }
  }

  // NESTED FOR LOOPS TO GET SCORES
  const createdWordsScoresArr = [];
  for (const createdWord of createdWords) {
    let wordScore = 0;
    for (const letter of createdWord) {
      wordScore = wordScore + scores[letter];
    }
    // createdWordsScoresArr.push({ [createdWord]: wordScore });
    createdWordsScoresArr.push({ word: createdWord, score: wordScore });
  }
  return createdWordsScoresArr;
}
console.log(wordsCreated("STHALCOMIDDWELDNAERVSPY"));
