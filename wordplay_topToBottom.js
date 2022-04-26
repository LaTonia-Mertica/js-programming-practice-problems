/*
For loops and if conditions
		 [x] What are all of the words containing UU?
		 [x] What are all of the words containing an X and a Y and a Z? ... note this does not specify letter order
		 [x] What are all of the words containing a Q but not a U?
		 [x] What are all of the words that contain the word CAT and are exactly 5 letters long?
		 [x] What are all of the words that have no E or A and are at least 15 letters long?
		 [x] What are all of the words that have a B and an X and are less than 5 letters long?
		 [x] What are all of the words that start and end with a Y?
		 [x] What are all of the words with no vowel and not even a Y?
		 [x] What are all of the words that have all 5 vowels, in any order?
		 [x] What are all of the words that have all 5 vowels, in alphabetical order? This question
             may be misleading if you get confused that vowels can repeat there just needs to be alpha
             order within it ... meaning each in order despite reoccurence of previously appeared vowels 

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
const { endianness } = require("os");
const stringsFromCollingsSpellingWords = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .trim();
const spellingWordsArray = stringsFromCollingsSpellingWords.split("\n");

const spellingWordsContainingUu = [];
for (const word of spellingWordsArray) {
  if (word.includes("UU")) {
    spellingWordsContainingUu.push(word);
  }
}
console.log({ spellingWordsContainingUu });

const zyxWords = [];
for (const word of spellingWordsArray) {
  if (
    word.indexOf("Z") !== -1 &&
    word.indexOf("Y") !== -1 &&
    word.indexOf("X") !== -1
  ) {
    zyxWords.push(word);
  }
}
console.log({ zyxWords });

const notUButQWords = [];
for (const word of spellingWordsArray) {
  if (word.indexOf("Q") !== -1 && word.indexOf("U") === -1) {
    notUButQWords.push(word);
  }
}
console.log({ notUButQWords });

const letters5ContainingCatWords = [];
const specifiedLetters = "CAT";
const specifiedLength = 5;
for (const word of spellingWordsArray) {
  if (word.includes(specifiedLetters) && word.length === specifiedLength) {
    letters5ContainingCatWords.push(word);
  }
}
console.log({ letters5ContainingCatWords });

const letters15NoEOrAWords = [];
for (const word of spellingWordsArray) {
  if (!word.includes("E") && !word.includes("A")) {
    letters15NoEOrAWords.push(word);
  }
}
console.log({ letters15NoEOrAWords });

const letters5ContainingBAndXWords = [];
const regex = /B/;
for (const word of spellingWordsArray) {
  if (
    word.indexOf("X") !== -1 &&
    word.length < 6 &&
    word.length > 4 &&
    word.search(regex) !== -1
  ) {
    letters5ContainingBAndXWords.push(word);
  }
}
console.log({ letters5ContainingBAndXWords });

const yLetterStartAndEndWords = [];
for (const word of spellingWordsArray) {
  if (word.charAt(0) === "Y" && word.charAt(word.length - 1) === "Y") {
    yLetterStartAndEndWords.push(word);
  }
}
console.log({ yLetterStartAndEndWords });

const noVowelNotAnyVowelWords = [];
for (const word of spellingWordsArray) {
  if (
    word.indexOf("A") === -1 &&
    word.indexOf("E") === -1 &&
    word.indexOf("I") === -1 &&
    word.indexOf("O") === -1 &&
    word.indexOf("U") === -1 &&
    word.indexOf("Y") === -1
  ) {
    noVowelNotAnyVowelWords.push(word);
  }
}
console.log({ noVowelNotAnyVowelWords });

const vowelsAnyOrderWords = [];
for (const word of spellingWordsArray) {
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
console.log({ vowelsAnyOrderWords });

const alphaOrderVowelsOnlyWords = [];
for (const word of spellingWordsArray) {
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
      alphaOrderVowelsOnlyWords.push(word);
    }
  }
}
console.log({ alphaOrderVowelsOnlyWords });

let substringTypeCount = 0;
const soughtSubstring = "TYPE";
const arrayOfTypeContainingWords = [];
for (const word of spellingWordsArray) {
  if (word.includes(soughtSubstring)) {
    substringTypeCount++;
    arrayOfTypeContainingWords.push(word);
  }
}
console.log({ substringTypeCount }, { arrayOfTypeContainingWords });

const endInGhtlyWords = [];
spellingWordsArray.forEach((element) => {
  if (element.endsWith("GHTLY")) {
    endInGhtlyWords.push(element);
  }
});
console.log({ endInGhtlyWords });

const startLatoWordsUsingForEach = [];
spellingWordsArray.forEach((element) => {
  if (element.startsWith("LATO")) {
    startLatoWordsUsingForEach.push(element);
  }
});
console.log({ startLatoWordsUsingForEach });

let allVowelsInShortestWord;
for (const word of spellingWordsArray) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !allVowelsInShortestWord ||
      word.length < allVowelsInShortestWord.length
    ) {
      allVowelsInShortestWord = word;
    }
  }
}
console.log({ allVowelsInShortestWord });

let noVowelsLongestWord;
for (const word of spellingWordsArray) {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (!noVowelsLongestWord || word.length > noVowelsLongestWord.length) {
      noVowelsLongestWord = word;
    }
  }
}
console.log({ noVowelsLongestWord });

let noVowelsNotEvenYLongestWord;
for (const word of spellingWordsArray) {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    if (
      !noVowelsNotEvenYLongestWord ||
      word.length > noVowelsNotEvenYLongestWord.length
    ) {
      noVowelsNotEvenYLongestWord = word;
    }
  }
}
console.log({ noVowelsNotEvenYLongestWord });

let qCount = 0;
let xCount = 0;
let zCount = 0;

for (const word of spellingWordsArray) {
  for (const letter of word) {
    if (letter === "Q") {
      qCount++;
    } else if (letter === "X") {
      xCount++;
    } else if (letter === zCount) {
      zCount++;
    }
  }
}
if (qCount < (xCount || zCount)) {
  console.log("LETTER Q IS LEAST COMMON");
} else if (xCount < (qCount || zCount)) {
  console.log("LETTER X IS LEAST COMMON");
} else if (zCount < (qCount || xCount)) {
  console.log("LETTER Z IS LEAST COMMON");
}

let palindromeLongest;
for (const word of spellingWordsArray) {
  wordReversed = word.split("").reverse().join("");
  if (wordReversed === word) {
    if (!palindromeLongest || palindromeLongest.length < word.length) {
      palindromeLongest = word;
    }
  }
}
console.log({ palindromeLongest });

const allSpellingWordsStrings = [];
allSpellingWordsStrings.push(stringsFromCollingsSpellingWords);
const notSeenConsecutivelyLetters = [];
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

for (const letter of alphabet) {
  for (const word of allSpellingWordsStrings) {
    if (word.includes(letter + letter)) {
      continue;
    } else {
      notSeenConsecutivelyLetters.push(letter);
    }
  }
}
console.log({ notSeenConsecutivelyLetters });
