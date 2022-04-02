/*
For loops and if conditions

[x] What are all of the words containing UU?
[x] What are all of the words containing an X and a Y and a Z? ... doesn't say must be in specific order
[x] What are all of the words containing a Q but not a U?
[x] What are all of the words that contain the word CAT and are exactly 5 letters long?
[x] What are all of the words that have no E or A and are at least 15 letters long? ... must be 15 or more
[x] What are all of the words that have a B and an X and are less than 5 letters long?
[x] What are all of the words that start and end with a Y?
[x] What are all of the words with no vowel and not even a Y?
[x] What are all of the words that have all 5 vowels, in any order? ... 5 vowels means not to include letter y
[x] What are all of the words that have all 5 vowels, in alphabetical order?

🤓THAT COMPLETES PART ONE!!!🎯🤓

Setting up storage to use during a for loop, including counters and arrays

[x] How many words contain the substring "TYPE”? ... question wants a number not a list ... BUT does not say substring must be at end of word
[x] Create and print an array containing all of the words that end in "GHTLY"
[x] What is the shortest word that contains all 5 vowels?
[x] What is the longest word that contains no vowels?
[x] What is the longest word that contains no vowels not even letter y?
[x] Which of the letters Q, X, and Z is the least common?
[x] What is the longest palindrome?

🤓THAT COMPLETES PART TWO!!!🎯🤓

[ ] What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

NOTE: File System Lines 30 through 32 Used for All Challenges
*/

const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8").trim();
const wordArray = wordStrings.split("\n");

let wordsContainingUU = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (word.includes("UU")) {
    wordsContainingUU.push(word);
  }
}
console.log({ wordsContainingUU });

let wordsContainingXYZ = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (word.includes("X") & word.includes("Y") && word.includes("Z")) {
    wordsContainingXYZ.push(word);
  }
}
console.log({ wordsContainingXYZ });

let wordsContainingQNotU = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (word.includes("Q") && !word.includes("U")) {
    wordsContainingQNotU.push(word);
  }
}
console.log({ wordsContainingQNotU });

let wordsContainingCatAnd5LettersLong = [];
for (let i = 0; i < wordArray.length; i++) {
  if (wordArray[i].length === 5 && wordArray[i].includes("CAT")) {
    wordsContainingCatAnd5LettersLong.push(wordArray[i]);
  }
}
console.log({ wordsContainingCatAnd5LettersLong });

let wordsContainingNoAAndNoEAnd15LettersLong = [];
for (let i = 0; i < wordArray.length; i++) {
  if (!wordArray[i].includes("A") && !wordArray[i].includes("E")) {
    if (wordArray[i].length >= 15) {
      wordsContainingNoAAndNoEAnd15LettersLong.push(wordArray[i]);
    }
  }
}
console.log({ wordsContainingNoAAndNoEAnd15LettersLong });

let wordsContainingBAndXAndUnder5LettersLong = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (word.includes("B") && word.includes("X") && word.length < 5) {
    wordsContainingBAndXAndUnder5LettersLong.push(word);
  }
}
console.log({ wordsContainingBAndXAndUnder5LettersLong });

let wordsStartAndEndWithY = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (word.startsWith("Y") && word.charAt(word.length - 1) === "Y") {
    wordsStartAndEndWithY.push(word);
  }
}
console.log({ wordsStartAndEndWithY });

let noVowelsNotEvenYWords = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    noVowelsNotEvenYWords.push(word);
  }
}
console.log({ noVowelsNotEvenYWords });

let allVowelsAnyOrderWords = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    allVowelsAnyOrderWords.push(word);
  }
}
console.log({ allVowelsAnyOrderWords });

let allVowelsAlphaOrderWords = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
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
      allVowelsAlphaOrderWords.push(word);
    }
  }
}
console.log({ allVowelsAlphaOrderWords });

let getNumWordsContainingSubstringTYPEAtEnd = 0;
let getNumWordsContainingSubstringTYPEAnywhere = 0;
const wordsContainingSubStringTYPEAnywhere = [];

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  const wordSubstring = word.length - 4;

  if (word.substring(wordSubstring) === "TYPE") {
    getNumWordsContainingSubstringTYPEAtEnd++;
  }
  if (word.includes("TYPE")) {
    getNumWordsContainingSubstringTYPEAnywhere++;
    wordsContainingSubStringTYPEAnywhere.push(word);
  }
}
console.log({ getNumWordsContainingSubstringTYPEAtEnd });
console.log({ getNumWordsContainingSubstringTYPEAnywhere });
console.log({ wordsContainingSubStringTYPEAnywhere });

const getWordsEndingInGHTLY = [];

for (const word of wordArray) {
  if (word.endsWith("GHTLY")) {
    getWordsEndingInGHTLY.push(word);
  }
}
console.log({ getWordsEndingInGHTLY });

let findShortestWordWithAllVowels;
for (word of wordArray) {
  if (
    !findShortestWordWithAllVowels ||
    word.length < findShortestWordWithAllVowels.length
  ) {
    if (
      word.includes("A") &&
      word.includes("E") &&
      word.includes("I") &&
      word.includes("O") &&
      word.includes("U")
    ) {
      findShortestWordWithAllVowels = word;
    }
  }
}
console.log({ findShortestWordWithAllVowels });

let findLongestWordThatHasNoVowels;
let findLongestWordThatHasNoVowelsNotEvenY;
for (const word of wordArray) {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (
      !findLongestWordThatHasNoVowels ||
      word.length > findLongestWordThatHasNoVowels.length
    ) {
      findLongestWordThatHasNoVowels = word;
    }
  }
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    if (
      !findLongestWordThatHasNoVowelsNotEvenY ||
      word.length > findLongestWordThatHasNoVowelsNotEvenY.length
    ) {
      findLongestWordThatHasNoVowelsNotEvenY = word;
    }
  }
}
console.log({ findLongestWordThatHasNoVowels });
console.log({ findLongestWordThatHasNoVowelsNotEvenY });

let qCount = 0;
let xCount = 0;
let zCount = 0;

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];

    if (letter === "Q") {
      qCount++;
    } else if (letter === "X") {
      xCount++;
    } else if (letter === "Z") {
      zCount++;
    }
  }
}
if (qCount < (xCount && zCount)) {
  console.log("LETTER Q AT A COUNT OF " + qCount + " IS THE LEAST");
} else if (xCount < (qCount && zCount)) {
  console.log("LETTER X AT A COUNT OF " + xCount + " IS THE LEAST");
} else if (zCount < (qCount && xCount)) {
  console.log("LETTER Z AT A COUNT OF " + zCount + " IS THE LEAST");
}
console.log(`Q COUNT: ${qCount}\nX COUNT: ${xCount}\nZ COUNT ${zCount}`);

let findLongestPalindromeInSowpods;
for (const word of wordArray) {
  const wordReversed = word.split("").reverse().join("");

  if (word === wordReversed) {
    if (
      !findLongestPalindromeInSowpods ||
      word.length > findLongestPalindromeInSowpods.length
    ) {
      findLongestPalindromeInSowpods = word;
    }
  }
}
console.log({ findLongestPalindromeInSowpods });
