/*
Setting up storage to use during a for loop, including counters and arrays
*/

const fs = require("fs");
const sowpodsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const sowpodsArray = sowpodsStrings.split("\n");

/*
 [x] Get how many words contain the substring "TYPE” without using includes
*/
let typeCounter = 0;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];

  if (word.indexOf("TYPE") === -1) {
    continue;
  } else {
    typeCounter++;
  }
}
console.log({ typeCounter });
console.log("SOWPODS LENGTH: " + sowpodsArray.length);

let x = 10;
x -= -1;
// console.log({ x });
// double negative produces positive, which is not what want here

// two ways to easily use regex
// const regex = /TYPE/g;
const regex = /^[T].+[E]$/g;
let tStarteEndCount = 0;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];

  if (word.search(regex) === -1) {
    continue;
  } else {
    tStarteEndCount++;
    // console.log({ word });
  }
}
console.log({ tStarteEndCount });

/*
[x] Use substring to get words that end in "GHTLY"
*/
function getWordsFromLetters(arr, startLetters, endLetters) {
  const wordsFromLetters = [];

  arr.forEach((word) => {
    const startWord = word.substring(0, startLetters.length);
    const endWord = word.substring(
      word.length - endLetters.length,
      word.length
    );
    if (startWord === startLetters && endWord === endLetters) {
      wordsFromLetters.push(word);
    }
  });
  return wordsFromLetters;
}
console.log(getWordsFromLetters(sowpodsArray, "BR", "LY"));

// in below use case, function requires a return statement
// for word variable and only needs pertinent arguments
function getWordsFromLetters(arr, startLetters, endLetters) {
  //   const wordsFromLetters =
  return arr.filter((word) => {
    const startWord = word.substring(0, startLetters.length);
    const endWord = word.substring(
      word.length - endLetters.length,
      word.length
    );
    if (startWord === startLetters && endWord === endLetters) {
      return word;
    }
  });
  // return wordsFromLetters;
}
console.log(getWordsFromLetters(sowpodsArray, "ANT", "OSS"));

/*
	[x] Find shortest word that contains all 5 vowels and compare to shortest word that contains all 5 vowels plus letter y
*/
let shortestWord;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];

  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (!shortestWord || shortestWord.length > word.length) {
      shortestWord = word;
    }
  }
}
console.log({ shortestWord });

let shortestWordContainingY;
for (let i = 0; i < sowpodsArray.length; i++) {
  const wordWithY = sowpodsArray[i];

  if (
    wordWithY.includes("A") &&
    wordWithY.includes("E") &&
    wordWithY.includes("I") &&
    wordWithY.includes("O") &&
    wordWithY.includes("U") &&
    wordWithY.includes("Y")
  ) {
    if (
      !shortestWordContainingY ||
      shortestWordContainingY.length > wordWithY.length
    ) {
      shortestWordContainingY = wordWithY;
    }
  }
}
console.log({ shortestWordContainingY });

/*
	 [x] Find longest word that contains no vowels and compare to longest word that contains no vowels not even letter y
*/
let longestWordNoVowels;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];

  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (!longestWordNoVowels || longestWordNoVowels.length < word.length) {
      longestWordNoVowels = word;
    }
  }
}
console.log({ longestWordNoVowels });

let longestWordNoVowelsNotEvenY;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];

  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    if (
      !longestWordNoVowelsNotEvenY ||
      longestWordNoVowelsNotEvenY.length < word.length
    ) {
      longestWordNoVowelsNotEvenY = word;
    }
  }
}
console.log({ longestWordNoVowelsNotEvenY });

/*
 [x] Print commonality of the letters Q, X, and Z per their respective count ie. letter is more common than other letter yet less common than other other letter
*/
let qCount = 0;
let xCount = 0;
let zCount = 0;

for (const word of sowpodsArray) {
  if (word.includes("Q")) {
    qCount++;
  } else if (word.includes("X")) {
    xCount++;
  } else if (word.includes("Z")) {
    zCount++;
  }
}
console.log({ qCount });
console.log({ xCount });
console.log({ zCount });

if (qCount > xCount && qCount < zCount) {
  console.log("Letter Q is more common than X and less common than Z");
} else if (xCount > qCount && xCount < zCount) {
  console.log("Letter X is more common than Q and less common than Z");
} else if (zCount > qCount && zCount < xCount) {
  console.log("Letter Z is more common than Q and less common than X");
} else {
  console.log(
    "There are other outcome possibilities - can't quite work it out just now!"
  );
}

/*
 [x] Find longest palindrome that contains all vowels and compare to longest palindrome that contains no vowels and compare to longest palindrome that contains no vowels not even y
*/
let longestPalindromeWithAllVowels;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  const revWord = word.split("").reverse().join("");
  if (
    word === revWord &&
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    longestPalindromeWithAllVowels = word;
  }
}
if (longestPalindromeWithAllVowels === undefined) {
  console.log("\nNo Palindrome Containing All Vowels Was Found!");
}
console.log({ longestPalindromeWithAllVowels }, "\n");

let longestPalindromeWithNoVowels;
for (const word of sowpodsArray) {
  const revWord = word.split("").reverse().join("");
  if (revWord === word) {
    if (
      !word.includes("A") &&
      !word.includes("E") &&
      !word.includes("I") &&
      !word.includes("O") &&
      !word.includes("U")
    ) {
      longestPalindromeWithNoVowels = word;
    } else if (word === "" || revWord === "") {
      continue;
    }
  }
}
if (
  longestPalindromeWithNoVowels === undefined ||
  longestPalindromeWithNoVowels === ""
) {
  console.log("\nNo Palindrome Containing No Vowels Was Found Either!");
}
console.log({ longestPalindromeWithNoVowels }, "\n");

let longestPalindromeWithNoVowelsNotEvenY;
for (const word of sowpodsArray) {
  const revWord = word.split("").reverse().join("");
  if (revWord === word) {
    if (
      !word.includes("A") &&
      !word.includes("E") &&
      !word.includes("I") &&
      !word.includes("O") &&
      !word.includes("U") &&
      !word.includes("Y")
    ) {
      longestPalindromeWithNoVowelsNotEvenY = word;
    }
  }
}
if (
  longestPalindromeWithNoVowelsNotEvenY === "" ||
  longestPalindromeWithNoVowelsNotEvenY === undefined
) {
  console.log(
    "\nSurprise - though not really! No Palindrome Was Found That Contains No Vowels Not Even Y"
  );
}
console.log({ longestPalindromeWithNoVowelsNotEvenY }, "\n");

/*
 [x] List letters that never appear consecutively/back-to-back in an English word? 
*/
const allWords = [];
allWords.push(sowpodsStrings);

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
const lettersThatDoNotAppearNextToThemselvesInEnglishWords = [];
for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];
  for (let j = 0; j < allWords.length; j++) {
    const word = allWords[j];

    if (word.includes(letter + letter)) {
      break;
    } else {
      lettersThatDoNotAppearNextToThemselvesInEnglishWords.push(letter);
    }
  }
}
console.log({ lettersThatDoNotAppearNextToThemselvesInEnglishWords });
