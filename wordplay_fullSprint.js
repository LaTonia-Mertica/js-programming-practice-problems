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

const fs = require("fs"); // built-in file reader
const sowpodsStrings = fs.readFileSync("sowpods.txt").toString("utf-8").trim(); // sowpods is text edit file provided with data
const sowpodsArray = sowpodsStrings.split("\n"); // these three lines arrange the file system to access and read data provided

const allWordsContainingUU = [];
// basic for loop is preferred with arrays
// option to use for in loop - still, use basic for loop
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (word.includes("UU")) {
    allWordsContainingUU.push(word);
  }
}
console.log({ allWordsContainingUU });
// adding {} around the variable inside console log parentheses
// adds the variable name as a title to the output for easier readability

// NOTE WE CAN JUST KEEP RE-USING THE FILE SYSTEM ABOVE
// AND PER SCOPE WE CAN ALSO RE-USE VARIABLE NAMES INSIDE
// SEPARATE FOR LOOPS

const wordsContainingXYZ = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    wordsContainingXYZ.push(word);
  }
}
console.log({ wordsContainingXYZ });

// if order was specified for the letters THEN
// one option may have been to keep them in alpha order

const wordsContainingXYZInAlphaOrder = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (word.includes("XYZ")) {
    wordsContainingXYZInAlphaOrder.push(word);
  }
}
console.log({ wordsContainingXYZInAlphaOrder });

// another option for alpha order may be
const wordsContainingXYZInAlphaOrderButNotNecessarilyNextToEachOther = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  // use const for variable declaration when will not OR
  // not sure if will re-assign value of the variable
  // even for array and object assignments to the variables
  const word = sowpodsArray[i];
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    const xPos = word.indexOf("X");
    const yPos = word.indexOf("Y");
    const zPos = word.indexOf("Z");
    if (!xPos < yPos && !yPos < zPos) {
      wordsContainingXYZInAlphaOrderButNotNecessarilyNextToEachOther.push(word);
    }
  }
}
console.log({ wordsContainingXYZInAlphaOrderButNotNecessarilyNextToEachOther });
// wonky example still you can see that x does not have to be before y
// nor does y need to be before z

const qButNotUWords = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (word.includes("Q") && !word.includes("U")) {
    // use descriptive variable names that gives insight
    // at a glance what the variable's value has/is doing
    qButNotUWords.push(word);
  }
}
console.log({ qButNotUWords });
// command z on mac to undo recent changes

const wordsContainingCATAnd5LettersLong = [];
// this for format is a basic for loop
// for (let i = 0; i < someDataSourceHere; i++) {
//}
// i can be anything just needs to be consistently
// used in all pertinent occurrences
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  // use strict comparison operators over non strict
  // meaning use === over using ==
  // or !== over using != ... triple means strict
  // strict comparison checks both datatype and value match
  if (word.includes("CAT") && word.length === 5) {
    wordsContainingCATAnd5LettersLong.push(word);
  }
}
console.log({ wordsContainingCATAnd5LettersLong });

const wordsAtLeast15LettersWithNoEAndNoA = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  // variable assignment to word for easier reference
  // to words accessed through the array created by file system
  // can just reference word instead of sowpodsArray[i] each time
  const word = sowpodsArray[i];
  // to exclude just add exclamation mark in front of condition to negate
  // again using strict operator as basic practice ... ===
  if (!word.includes("E") && !word.includes("A") && word.length === 15) {
    wordsAtLeast15LettersWithNoEAndNoA.push(word);
  }
}
console.log({ wordsAtLeast15LettersWithNoEAndNoA });

// re-checking question is good habit
const bAndXUnder5LetterWords = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (word.includes("B") && word.includes("X") && word.length < 5) {
    bAndXUnder5LetterWords.push(word);
  }
}
console.log({ bAndXUnder5LetterWords });
// control l clears content in terminal
// and pressing up or down arrow gets you to commands previous run

const letterYStartAndEndWords = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (word.startsWith("Y") && word.endsWith("Y")) {
    letterYStartAndEndWords.push(word);
  }
}
console.log({ letterYStartAndEndWords });

// another more manual option
const yAtStartAndEndWords = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (word.charAt(0) === "Y" && word.charAt(word.length - 1) === "Y") {
    yAtStartAndEndWords.push(word);
  }
}
console.log({ yAtStartAndEndWords });

const wordsContainingNoVowelsNotEvenY = [];
// used apple to illustrate that variable can be anything
// as long as implemented consistently throughout code
// i is general and best practice
// followed by j for inner loop
// then k for inner inner loop et cetera
// on mac in visual studio code with prettier ... command d to
// multi select and make multi edits at once
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
    wordsContainingNoVowelsNotEvenY.push(word);
  }
}
console.log({ wordsContainingNoVowelsNotEvenY });

const allVowelsAnyOrderWords = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
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

// question didn't ask for letter y
// but states "all 5" which is clue not to include y

const allVowelsInAlphaOrderWords = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  // set variable to reference position aka index easier
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
      allVowelsInAlphaOrderWords.push(word);
    }
  }
}
console.log({ allVowelsInAlphaOrderWords });

// mis read question ... just needs to have type in each word ... which means use includes
// also note proper syntax is to lowercase first word then Capitalize each first letter of
// each next word NOT TO ALL CAPS TYPE ... I do it for selfish readability
let numWordsContainingSubstringType = 0;
let numWordsContainingSubstringTypeAsLast4Letters = 0;
// not asked for - extra practice never hurts
const wordsContainingSubstringType = [];
const wordsContainingSubstringTypeAsLast4Letters = [];
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  const wordSubStr = word.length - 4; // to compare words with only last four of type
  if (word.includes("TYPE")) {
    numWordsContainingSubstringType++;
    wordsContainingSubstringType.push(word);
  }
  if (word.substring(wordSubStr) === "TYPE") {
    numWordsContainingSubstringTypeAsLast4Letters++;
    wordsContainingSubstringTypeAsLast4Letters.push(word);
  }
}
console.log({ numWordsContainingSubstringType });
console.log({ numWordsContainingSubstringTypeAsLast4Letters });
console.log({ wordsContainingSubstringType });
console.log({ wordsContainingSubstringTypeAsLast4Letters });
// but this does not use substring, which is assumed
// since it is specifically noted in the question
// not output sought ... being read as if whole word
// except last character aka letter is TYPE

const arrayOfWordsEndingInGhtly = [];
let wordsEndingWithGhtlyByCount = 0; // console log cannot access when function scoped
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (word.substring(word.length - 5) === "GHTLY") {
    // after some pondering of the question
    // the very obvious is apparent
    // ghtly means the word ends with 5 letters NOT FOUR
    arrayOfWordsEndingInGhtly.push(word);
    wordsEndingWithGhtlyByCount++;
  }
}
console.log({ arrayOfWordsEndingInGhtly });
console.log({ wordsEndingWithGhtlyByCount });

// I know I'll need to re-assign the variable
let shortestWordWithAllVowels;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !shortestWordWithAllVowels ||
      shortestWordWithAllVowels.length > word.length
    ) {
      shortestWordWithAllVowels = word;
    }
  }
}
console.log({ shortestWordWithAllVowels });
console.log(
  " Shortest Word With All Vowels: " +
    shortestWordWithAllVowels +
    " HAS A LENGTH OF " +
    shortestWordWithAllVowels.length +
    " LETTERS"
);

let longestWordContainingNoVowels;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y") // just to compare if did not even have sometimes vowel y
  ) {
    if (
      !longestWordContainingNoVowels ||
      longestWordContainingNoVowels.length < word.length
    ) {
      longestWordContainingNoVowels = word;
    }
  }
}
console.log({ longestWordContainingNoVowels });
console.log(
  `LONGEST WORD ${longestWordContainingNoVowels} HAS ${longestWordContainingNoVowels.length} LETTERS`
);

// letter count
// seems this also counts number of words - ?not necessarily individual letter q appearances?
let qCount = 0;
let xCount = 0;
let zCount = 0;

// word with letter count .. . unnecessary because can get length of array
// let wordsWithLetterQ = 0;
// let wordsWithLetterX = 0;
// let wordsWithLetterZ = 0;

// words with letter
const wordsWithLetterQArr = [];
const wordsWithLetterXArr = [];
const wordsWithLetterZArr = [];

for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  if (word.includes("Q")) {
    qCount++;
    wordsWithLetterQArr.push(word);
  } else if (word.includes("X")) {
    xCount++;
    wordsWithLetterXArr.push(word);
  } else if (word.includes("Z")) {
    zCount++;
    wordsWithLetterZArr.push(word);
  }
}
console.log(`Q COUNT: ${qCount}\nX COUNT: ${xCount}\nZ COUNT: ${zCount}`);
console.log("Q WORDS COUNT: " + wordsWithLetterQArr.length);
console.log("Q WORDS COUNT: " + wordsWithLetterXArr.length);
console.log("Q WORDS COUNT: " + wordsWithLetterZArr.length);
// console.log(`X WORDS COUNT: ${wordsWithLetterXArr}`);
// console.log(`Z WORDS COUNT: ${wordsWithLetterZArr}`);

let palindromeThatIsTheLongest;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  const reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    if (
      !palindromeThatIsTheLongest ||
      word.length > palindromeThatIsTheLongest.length
    ) {
      palindromeThatIsTheLongest = word;
    }
  }
}
console.log({ palindromeThatIsTheLongest });

// let's see if we can get the longest palindrome
// that contains no vowels in it

let palindromeWithNoVowelsThatIsLongest;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];
  const reverseWord = word.split("").reverse().join("");

  // if they equal it means we have a palindrome
  if (word === reverseWord) {
    palindromeWithNoVowelsThatIsLongest = word;
    // if the longest is not yet assigned a value
    // or a palindrome is longer than it is
    // and it does not contain a specified vowel
    // re-assign it to the longer length of the two
  }
  if (word.length > palindromeWithNoVowelsThatIsLongest) {
    palindromeWithNoVowelsThatIsLongest = word;
  }
  if (
    !palindromeWithNoVowelsThatIsLongest.includes("A") &&
    !palindromeWithNoVowelsThatIsLongest.includes("E") &&
    !palindromeWithNoVowelsThatIsLongest.includes("I") &&
    !palindromeWithNoVowelsThatIsLongest.includes("O") &&
    !palindromeWithNoVowelsThatIsLongest.includes("U") &&
    !palindromeWithNoVowelsThatIsLongest.includes("Y")
  ) {
    palindromeWithNoVowelsThatIsLongest = word;
  }
}

console.log({ palindromeWithNoVowelsThatIsLongest });

// may be but doesn't feel right
// clearly not correct
// enough of that for today ...

let allSowpodsWords = [];
allSowpodsWords.push(sowpodsStrings);

const lettersThatDoNotAppearConsecutivelyInEnglishWords = [];
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

for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];
  for (let j = 0; j < allSowpodsWords.length; j++) {
    const word = allSowpodsWords[j];

    if (word.includes(letter + letter)) {
      break;
    } else {
      lettersThatDoNotAppearConsecutivelyInEnglishWords.push(letter);
    }
  }
}
console.log({ lettersThatDoNotAppearConsecutivelyInEnglishWords });
