/*
For loops and if conditions
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

Setting up storage to use during a for loop, including counters and arrays
		 [x] How many words contain the substring "TYPE”?
		 [x] Create and print an array containing all of the words that end in "GHTLY"
		 [x] What is the shortest word that contains all 5 vowels?
		 [x] What is the longest word that contains no vowels?
		 [x] Which of the letters Q, X, and Z is the least common?
		 [x] What is the longest palindrome?
		 [] What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?
 */

const fs = require("fs");
const sowpodsWordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const sowpodsWordArray = sowpodsWordStrings.split("\n");

const uuWords = [];
for (const word of sowpodsWordArray) {
  if (word.includes("UU")) {
    uuWords.push(word);
  }
}
console.log({ uuWords });

const xyzWords = [];
for (const word of sowpodsWordArray) {
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    xyzWords.push(word);
  }
}
console.log({ xyzWords });

const qNotUWords = [];
for (const word of sowpodsWordArray) {
  if (word.includes("Q") && !word.includes("U")) {
    qNotUWords.push(word);
  }
}
console.log({ qNotUWords });

const wordsWithCat5LettersLongs = [];
for (const word of sowpodsWordArray) {
  if (word.includes("CAT") && word.length === 5) {
    wordsWithCat5LettersLongs.push(word);
  }
}
console.log({ wordsWithCat5LettersLongs });

const noEOrAAtLeast15LettersLong = [];
for (const word of sowpodsWordArray) {
  if (!word.includes("E") && !word.includes("A") && word.length >= 15) {
    noEOrAAtLeast15LettersLong.push(word);
  }
}
console.log({ noEOrAAtLeast15LettersLong });

const bAndXUnder5LettersLong = [];
for (let i = 0; i < sowpodsWordArray.length; i++) {
  const word = sowpodsWordArray[i];
  if (word.includes("B") && word.includes("X") && word.length < 5) {
    bAndXUnder5LettersLong.push(word);
  }
}
console.log({ bAndXUnder5LettersLong });

const yStartAndEnd = [];
for (let i = 0; i < sowpodsWordArray.length; i++) {
  const word = sowpodsWordArray[i];
  if (word.startsWith("Y") && word.endsWith("Y")) {
    yStartAndEnd.push(word);
  }
}
console.log({ yStartAndEnd });

const noVowelsNotEvenY = [];
for (let i = 0; i < sowpodsWordArray.length; i++) {
  const word = sowpodsWordArray[i];

  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    noVowelsNotEvenY.push(word);
  }
}
console.log({ noVowelsNotEvenY });

const allVowelsAnyOrder = [];
for (let i = 0; i < sowpodsWordArray.length; i++) {
  const word = sowpodsWordArray[i];

  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    allVowelsAnyOrder.push(word);
  }
}
console.log({ allVowelsAnyOrder });

const allVowelsInAlphaOrder = [];
for (let i = 0; i < sowpodsWordArray.length; i++) {
  const word = sowpodsWordArray[i];

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
      allVowelsInAlphaOrder.push(word);
    }
  }
}
console.log({ allVowelsInAlphaOrder });

let typeSubstringWords = 0;
for (const word of sowpodsWordArray) {
  if (word.includes("TYPE")) {
    typeSubstringWords++;
  }
}
console.log({ typeSubstringWords });

const ghtlyEndingWords = [];
for (let i = 0; i < sowpodsWordArray.length; i++) {
  const word = sowpodsWordArray[i];

  if (word.endsWith("GHTLY")) {
    ghtlyEndingWords.push(word);
  }
}
console.log({ ghtlyEndingWords });

let shortestAllVowelsWord = sowpodsWordArray[0];
for (const word of sowpodsWordArray) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (!shortestAllVowelsWord || word.length < shortestAllVowelsWord.length) {
      shortestAllVowelsWord = word;
    }
  }
}
console.log({ shortestAllVowelsWord });

let longestNoVowelsword;
for (let i = 0; i < sowpodsWordArray.length; i++) {
  const word = sowpodsWordArray[i];

  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (!longestNoVowelsword || word.length > longestNoVowelsword.length) {
      longestNoVowelsword = word;
    }
  }
}
console.log({ longestNoVowelsword });

let longestNoVowelswordNotEvenY;
for (let i = 0; i < sowpodsWordArray.length; i++) {
  const word = sowpodsWordArray[i];

  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    if (
      !longestNoVowelswordNotEvenY ||
      word.length > longestNoVowelswordNotEvenY.length
    ) {
      longestNoVowelswordNotEvenY = word;
    }
  }
}
console.log({ longestNoVowelswordNotEvenY });

let qCount = 0;
let xCount = 0;
let zCount = 0;

for (let i = 0; i < sowpodsWordArray.length; i++) {
  const word = sowpodsWordArray[i];

  if (word.includes("Q")) {
    qCount++;
  } else if (word.includes("X")) {
    xCount++;
  } else if (word.includes("Z")) {
    zCount++;
  }
}
if (qCount < xCount && zCount) {
  console.log(`Q COUNT IS THE LEAST`);
} else if (xCount < qCount && zCount) {
  console.log(`X COUNT IS THE LEAST`);
} else {
  console.log(`Z COUNT IS THE LEAST`);
}
console.log({ qCount });
console.log({ xCount });
console.log({ zCount });

let longestPalindrome;
for (const word of sowpodsWordArray) {
  reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    if (!longestPalindrome || word.length > longestPalindrome.length) {
      longestPalindrome = word;
    }
  }
}
console.log(
  `Longest Palindrome: ${longestPalindrome} of ${longestPalindrome.length} letters`
);

// must loop with letters of alphabet in outer loop
// must parse strings through array to properly compare letters
const allWords = [];
allWords.push(sowpodsWordStrings);
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
const nonConsecutiveLetters = [];
for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];

  for (let j = 0; j < allWords.length; j++) {
    const word = allWords[j];

    if (word.includes(letter + letter)) {
      break;
    } else {
      nonConsecutiveLetters.push(letter);
    }
  }
}
console.log({ nonConsecutiveLetters });
