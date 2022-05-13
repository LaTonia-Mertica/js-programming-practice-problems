/*
COMPLETE 3 FULL SPRINTS WITHOUT BROKEN CODE

		 [x] What are all of the words containing UU?
		 [x] What are all of the words containing an X and a Y and a Z?
		 [x] What are all of the words containing a Q but not a U?
		 [x] What are all of the words that contain the word CAT and are exactly 5 letters long?
		 [x] What are all of the words that have no E or A and are at least 15 letters long?
		 [x] What are all of the words that have a B and an X and are less than 5 letters long?
		 [x] What are all of the words that start and end with a Y?
		 [x] What are all of the words with no vowel and not even a Y?
		 [x] What are all of the words that have all 5 vowels, in any order?
		 [x] What are all of the words that have all 5 vowels, in alphabetical order?

		 [x] How many words contain the substring "TYPE”?
		 [x] Create and print an array containing all of the words that end in "GHTLY"
		 [x] What is the shortest word that contains all 5 vowels?
		 [x] What is the longest word that contains no vowels?
         [x] What is the longest word that contains no vowels not even y?
		 [x] Which of the letters Q, X, and Z is the least common?
		 [x] What is the longest palindrome?
		 [x] What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

        🥸
*/

const fs = require("fs");
const wordsStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordsArray = wordsStrings.split("\n");

const getUuWords = () => {
  const uuWords = [];
  for (const word of wordsArray) {
    if (word.includes("UU")) {
      uuWords.push(word);
    }
  }
  return uuWords;
};
console.log(getUuWords());

const getXyzWords = () => {
  const xyzWords = [];
  for (const word of wordsArray) {
    if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
      xyzWords.push(word);
    }
  }
  return xyzWords;
};
console.log(getXyzWords());

const getQNotUWords = () => {
  const qNotUWords = [];
  for (const word of wordsArray) {
    if (word.includes("Q") && !word.includes("U")) {
      qNotUWords.push(word);
    }
  }
  return qNotUWords;
};
console.log(getQNotUWords());

const getCat5LetterWords = () => {
  const cat5LetterWords = [];
  for (const word of wordsArray) {
    if (word.includes("CAT") && word.length === 5) {
      cat5LetterWords.push(word);
    }
  }
  return cat5LetterWords;
};
console.log(getCat5LetterWords());

const getNoAOrEAtLeast15LetterWords = () => {
  const noAOrEAtLeast15LetterWords = [];
  for (const word of wordsArray) {
    if (!word.includes("A") && !word.includes("E") && word.length >= 15) {
      noAOrEAtLeast15LetterWords.push(word);
    }
  }
  return noAOrEAtLeast15LetterWords;
};
console.log(getNoAOrEAtLeast15LetterWords());

const getBAndXUnder5LetterWords = () => {
  const bAndXUnder5LetterWords = [];
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (word.includes("B") && word.includes("X") && word.length < 5) {
      bAndXUnder5LetterWords.push(word);
    }
  }
  return bAndXUnder5LetterWords;
};
console.log(getBAndXUnder5LetterWords());

const getYStartAndEndWords = () => {
  const yStartAndEndWords = [];
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (word.startsWith("Y") && word.endsWith("Y")) {
      yStartAndEndWords.push(word);
    }
  }
  return yStartAndEndWords;
};
console.log(getYStartAndEndWords());

function getNoVowelsNotEvenYWords() {
  const noVowelsNotEvenYWords = [];
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (
      word.includes("A") ||
      word.includes("E") ||
      word.includes("I") ||
      word.includes("O") ||
      word.includes("U") ||
      word.includes("Y")
    ) {
      continue;
    } else {
      noVowelsNotEvenYWords.push(word);
    }
  }
  return noVowelsNotEvenYWords;
}
console.log(getNoVowelsNotEvenYWords());

function getVowelsAnyOrderWords() {
  const vowelsAnyOrderWords = [];
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (
      word.includes("A") &&
      word.includes("E") &&
      word.includes("I") &&
      word.includes("O") &&
      word.includes("U")
    ) {
      vowelsAnyOrderWords.push(word);
    }
  }
  return vowelsAnyOrderWords;
}
console.log(getVowelsAnyOrderWords());

function getVowelsAlphaOrderWords() {
  const vowelsAlphaOrderWords = [];
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    const aPos = word.indexOf("A");
    const ePos = word.indexOf("E");
    const iPos = word.indexOf("I");
    const oPos = word.indexOf("O");
    const uPos = word.indexOf("U");

    if (
      word.includes("A") &&
      word.includes("E") &&
      word.includes("I") &&
      word.includes("O") &&
      word.includes("U")
    ) {
      if (aPos < ePos && ePos < iPos && iPos < oPos && oPos < uPos) {
        vowelsAlphaOrderWords.push(word);
      }
    }
  }
  return vowelsAlphaOrderWords;
}
console.log(getVowelsAlphaOrderWords());

function getTypeCountWords() {
  let typeCountWords = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (word.includes("TYPE")) {
      typeCountWords++;
    }
  }
  return typeCountWords;
}
console.log(getTypeCountWords());

function getGhtlyEndWords() {
  const ghtlyEndWords = [];
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (word.endsWith("GHTLY")) {
      ghtlyEndWords.push(word);
    }
  }
  return ghtlyEndWords;
}
console.log(getGhtlyEndWords());

function getShortestAllVowelsWord() {
  let shortestAllVowelsWord;
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (
      word.includes("A") &&
      word.includes("E") &&
      word.includes("I") &&
      word.includes("O") &&
      word.includes("U")
    ) {
      if (
        !shortestAllVowelsWord ||
        word.length < shortestAllVowelsWord.length
      ) {
        shortestAllVowelsWord = word;
      }
    }
  }
  return shortestAllVowelsWord;
}
console.log(getShortestAllVowelsWord());

function getLongestNoVowelsWord() {
  let longestNoVowelsWord;
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (
      !word.includes("A") &&
      !word.includes("E") &&
      !word.includes("I") &&
      !word.includes("O") &&
      !word.includes("U")
    ) {
      if (!longestNoVowelsWord || word.length > longestNoVowelsWord.length) {
        longestNoVowelsWord = word;
      }
    }
  }
  return longestNoVowelsWord;
}
console.log(getLongestNoVowelsWord());

function getLongestNoVowelsNotEvenYWord() {
  let longestNoVowelsNotEvenYWord;
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (
      !word.includes("A") &&
      !word.includes("E") &&
      !word.includes("I") &&
      !word.includes("O") &&
      !word.includes("U") &&
      !word.includes("Y")
    ) {
      if (
        !longestNoVowelsNotEvenYWord ||
        word.length > longestNoVowelsNotEvenYWord.length
      ) {
        longestNoVowelsNotEvenYWord = word;
      }
    }
  }
  return longestNoVowelsNotEvenYWord;
}
console.log(getLongestNoVowelsNotEvenYWord());

function getLeastCommonLetter() {
  let qCount = 0;
  let xCount = 0;
  let zCount = 0;
  for (const word of wordsArray) {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (letter === "Q") {
        qCount++;
      } else if (letter === "X") {
        xCount++;
      } else if (letter === "Z") {
        zCount++;
      }
    }
  }
  //    if (qCount < (xCount || zCount)) {
  //     console.log("Q IS LEAST COMMON");
  //   } else if (xCount < (qCount || zCount)) {
  //     console.log("X IS LEAST COMMON");
  //   } else {
  //     console.log("Z IS LEAST COMMON");
  //   }
  return (
    "\nLETTER Q COUNT: " +
    qCount +
    "\nLETTER X COUNT: " +
    xCount +
    "\nLETTER Z COUNT: " +
    zCount +
    "\n"
  );
}
console.log(getLeastCommonLetter());

function getLongestPalindrome() {
  let longestPalindrome;
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    const pWord = word.split("").reverse().join("");

    if (pWord === word) {
      if (!longestPalindrome || word.length > longestPalindrome.length) {
        longestPalindrome = word;
      }
    }
  }
  return longestPalindrome;
}
console.log(getLongestPalindrome());

function getNoRepeatLetters() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const allWords = [];
  allWords.push(wordsStrings);

  const noRepeatLetters = [];

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    for (let j = 0; j < allWords.length; j++) {
      const word = allWords[j];
      if (word.includes(letter + letter)) {
        continue;
      } else {
        noRepeatLetters.push(letter);
      }
    }
  }
  return noRepeatLetters;
}
console.log(getNoRepeatLetters());
