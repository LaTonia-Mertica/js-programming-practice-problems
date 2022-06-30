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

// helper fn: create object of letters in word
function getLetterCount(word) {
  const letterCount = {};
  for (const letter of word) {
    if (letterCount.hasOwnProperty(letter)) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}
// console.log(getLetterCount("DANNYBOY"));

// helper fn: comparing key-value pairs in two objects to see if a word can be made
function isValidWord(scrabbleRack, inputWord) {
  let wildcards = 0;
  if (scrabbleRack["_"]) {
    wildcards = scrabbleRack["_"];
  }

  for (const [key, value] of Object.entries(inputWord)) {
    if (!scrabbleRack[key] || value > scrabbleRack[key]) {
      if (wildcards < 1) {
        return false;
      }
      wildcards--;
    }
  }
  return true;
}
// const scrabbleRack = getLetterCount("MCTESTERSON");
// // const inputWord = getLetterCount("TESTER"); // true
// // const inputWord = getLetterCount("TESTY"); // false
// console.log(isValidWord(scrabbleRack, inputWord));

// main fn: generate words that can be created from available letters
const words = ["A", "DOUGH", "HAIKUS", "DOG"];
function getValidWords(availableLetters) {
  const availableLettersObj = getLetterCount(availableLetters);

  const validWords = [];

  for (const word of words) {
    const wordObj = getLetterCount(word);

    if (isValidWord(availableLettersObj, wordObj)) {
      validWords.push(word);
    }
  }

  const wordsScored = [];
  for (const word of validWords) {
    let score = 0;
    for (const letter of word) {
      score += scores[letter];
    }
    wordsScored.push({ word, score });
  }
  // return validWords;
  return wordsScored;
}
console.log(getValidWords("HAKIHDO_U"));
