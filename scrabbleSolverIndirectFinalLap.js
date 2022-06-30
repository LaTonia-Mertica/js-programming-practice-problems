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
function getLetterCount(word) {
  const letterCount = {};
  for (const letter of word) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
  return letterCount;
}
// console.log(getLetterCount("LA'TONIA MERTICA SHEPPARD WALKER"));

/*
    THE GOAL:
    - helper fn to get if inputted word can be made
    - input  of two objs
    - output bool re: whether word can be made
*/
function isValidWord(scrabbleRackObj, inputWordObj) {
  let blankTiles = 0;
  if (scrabbleRackObj["_"]) {
    blankTiles = scrabbleRackObj["_"];
  }

  for (const [key, value] of Object.entries(inputWordObj)) {
    if (!scrabbleRackObj[key] || value > scrabbleRackObj[key]) {
      if (blankTiles < 1) {
        return false;
      }
      blankTiles--;
    }
  }
  return true;
}
// const scrabbleRackObj = getLetterCount("LLATIREVEOSN");
// // const inputWordObj = getLetterCount("REVEL"); // true
// const inputWordObj = getLetterCount("SALVATION"); // false
// console.log(isValidWord(scrabbleRackObj, inputWordObj));

/*
    THE GOAL:
    - fn
    - input single string
    - return array of words from those made
    - return array of words with their scores from those made
*/
const words = [
  "jissodisfaw",
  "jirbħu",
  "ivvjaġġar",
  "jippreservaw",
  "rilassament",
  "isfida",
  "jiddiżappunta",
];

function getValidWords(availableLetters) {
  const validWords = [];
  const availableLettersObj = getLetterCount(availableLetters);

  for (const word of words) {
    const wordObj = getLetterCount(word);

    if (isValidWord(availableLettersObj, wordObj)) {
      validWords.push(word);
    }
  }

  const wordScore = [];
  for (const word of validWords) {
    let score = 0;
    for (const letter of word) {
      score = score + scores[letter.toUpperCase()];
    }
    wordScore.push({ word: word, score: score });
  }
  // return validWords;
  return wordScore;
}
// console.log(getValidWords("gthaifmoungeerids"));
// console.log("\n", getValidWords("g__thaifmoungee_rids"), "\n");

// ħ not recognized as a letter
// console.log(getLetterCount("jirbħu")); // NaN

// SCRABBLE SOLVER IN THREE PARTS
const wordList = ["CAPITAL", "HABITUAL", "RESIDUAL"];

// helper fn: get count of letters by word
function getCountOfLettersInWord(word) {
  const countOfLettersInWord = {};
  for (const letter of word) {
    if (!countOfLettersInWord[letter]) {
      countOfLettersInWord[letter] = 1;
    } else {
      countOfLettersInWord[letter]++;
    }
  }
  return countOfLettersInWord;
}
// console.log(getCountOfLettersInWord("PHENOMENALNESSIOUSNESS"));

// helper fn: determine if word is valid
function isWordValid(availableLettersObj, inputWordObj) {
  let blankTilesAkaWildcards = 0;
  if (availableLettersObj["_"]) {
    blankTilesAkaWildcards = availableLettersObj["_"];
  }

  for (const [key, value] of Object.entries(inputWordObj)) {
    if (!availableLettersObj[key] || value > availableLettersObj[key]) {
      if (blankTilesAkaWildcards < 1) {
        return false;
      }
      blankTilesAkaWildcards--;
    }
  }
  return true;
}
const availableLettersObj = getCountOfLettersInWord("BELLA");
// const inputWordObj = getCountOfLettersInWord("BALE"); // true
// const inputWordObj = getCountOfLettersInWord("BALLET"); // false
// console.log(isWordValid(availableLettersObj, inputWordObj));

// main fn: get valid words
// then: incorporate word scores
function getWordsThatAreValid(availableLetters) {
  const availableLettersObj = getCountOfLettersInWord(availableLetters);
  const validWords = [];

  for (const word of wordList) {
    const wordObj = getCountOfLettersInWord(word);

    if (isWordValid(availableLettersObj, wordObj)) {
      validWords.push(word);
    }
  }

  const scorePerWord = [];
  for (const word of validWords) {
    let score = 0;
    for (const letter of word) {
      score = score + scores[letter];
    }
    scorePerWord.push({ word: word, score: score });
  }
  // return validWords;
  return scorePerWord;
}
console.log(getWordsThatAreValid("ITUA_ALSHB_SR"));
