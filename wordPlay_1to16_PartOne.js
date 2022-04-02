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

[x] How many words contain the substring "TYPE”? ... question wants a number not a list ...
[x] Create and print an array containing all of the words that end in "GHTLY"
[x] What is the shortest word that contains all 5 vowels?
[x] What is the longest word that contains no vowels?
[x] What is the longest word that contains no vowels - not even y?
[x] Which of the letters Q, X, and Z is the least common?
[x] What is the longest palindrome?
[x] What is the shortest palindromes?
[x] Are there palindromes that do not contain vowels - if yes, print all?
[ ] Are there palindromes that only contain vowels - if yes, print all?
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

let typeCount = 0;
let wordsContainingTYPE = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (word.includes("TYPE")) {
    wordsContainingTYPE.push(word);
    typeCount++;
  }
}
console.log({ typeCount });
console.log({ wordsContainingTYPE });

let wordsEndingWithGHTLYUsingForLoop = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (word.endsWith("GHTLY")) {
    wordsEndingWithGHTLYUsingForLoop.push(word);
  }
}
console.log({ wordsEndingWithGHTLYUsingForLoop });

let ghtlyEndingWordsUsingSubstringWithForOfLoop = [];
for (const word of wordArray) {
  if (word.substring(word.length - 5) === "GHTLY") {
    ghtlyEndingWordsUsingSubstringWithForOfLoop.push(word);
  }
}
console.log({ ghtlyEndingWordsUsingSubstringWithForOfLoop });

let last5LettersGHTLYWords = [];
for (const word of wordArray) {
  const ghtlyWords = word.substring(word.length - 5);
  if (ghtlyWords === "GHTLY") {
    last5LettersGHTLYWords.push(word);
  }
}
console.log({ last5LettersGHTLYWords });

let allVowelsShortestWord;
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (!allVowelsShortestWord || allVowelsShortestWord.length > word.length) {
      allVowelsShortestWord = word;
    }
  }
}
console.log({ allVowelsShortestWord });

let vowelsAllPresentInShortestWord;
for (const word of wordArray) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !vowelsAllPresentInShortestWord ||
      word.length < vowelsAllPresentInShortestWord.length
    ) {
      vowelsAllPresentInShortestWord = word;
    }
  }
}
console.log({ vowelsAllPresentInShortestWord });

let noVowelsInLongestWord;
for (const word of wordArray) {
  if (
    !word.includes("U") &&
    !word.includes("O") &&
    !word.includes("I") &&
    !word.includes("E") &&
    !word.includes("A")
  ) {
    if (!noVowelsInLongestWord || word.length > noVowelsInLongestWord.length) {
      noVowelsInLongestWord = word;
    }
  }
}
console.log({ noVowelsInLongestWord });

let noVowelsNotEvenYInLongestWord;
for (const word of wordArray) {
  if (
    !word.includes("Y") &&
    !word.includes("U") &&
    !word.includes("O") &&
    !word.includes("I") &&
    !word.includes("E") &&
    !word.includes("A")
  ) {
    if (
      !noVowelsNotEvenYInLongestWord ||
      word.length > noVowelsNotEvenYInLongestWord.length
    ) {
      noVowelsNotEvenYInLongestWord = word;
    }
  }
}
console.log({ noVowelsNotEvenYInLongestWord });

let qCount = 0;
let xCount = 0;
let zCount = 0;
for (const word of wordArray) {
  if (word.includes("Q")) {
    qCount++;
  } else if (word.includes("X")) {
    xCount++;
  } else if (word.includes("Z")) {
    zCount++;
  }
}
if (qCount < (xCount && zCount)) {
  console.log(`Q COUNT IS LEAST AT A COUNT OF ${qCount}`);
} else if (xCount < (qCount && zCount)) {
  console.log(`X COUNT IS LEAST AT A COUNT OF ${xCount}`);
} else if (zCount < (qCount && xCount)) {
  console.log(`Z COUNT IS LEAST AT A COUNT OF ${zCount}`);
}
console.log("Q COUNT: ", qCount);
console.log("X COUNT: ", xCount);
console.log("Z COUNT: ", zCount);

let palindromeThatIsTheLongest;
for (const word of wordArray) {
  const reverseStr = word.split("").reverse().join("");
  if (word === reverseStr) {
    if (
      !palindromeThatIsTheLongest ||
      word.length > palindromeThatIsTheLongest.length
    ) {
      palindromeThatIsTheLongest = word;
    }
  }
}
console.log({ palindromeThatIsTheLongest });

let palindromeThatIsTheShortest;
for (const word of wordArray) {
  const reverseStr = word.split("").reverse().join("");
  if (word === reverseStr) {
    if (
      !palindromeThatIsTheShortest ||
      word.length < palindromeThatIsTheShortest.length
    ) {
      palindromeThatIsTheShortest = word;
    }
  }
}
console.log({ palindromeThatIsTheShortest });

let palindromesThatDoNotContainVowels = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  const wordReversed = word.split("").reverse().join("");
  if (word === wordReversed) {
    if (
      !word.includes("A") &&
      !word.includes("E") &&
      !word.includes("I") &&
      !word.includes("O") &&
      !word.includes("U")
    ) {
      palindromesThatDoNotContainVowels.push(word);
    }
  }
}
if (palindromesThatDoNotContainVowels.length === 0) {
  console.log("PALINDROMES WITHOUT VOWELS DO NOT EXIST IN US ENGLISH");
}
console.log({ palindromesThatDoNotContainVowels });

// let allPalindromes = [];
// let palindromesThatOnlyContainVowelsArr = [];
let palindromesThatOnlyContainVowelsDict = {};
// const lettersUnwanted = [
//   "B",
//   "C",
//   "D",
//   "F",
//   "G",
//   "H",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  const wordInReverse = word.split("").reverse().join("");
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (word === wordInReverse) {
      if (
        word.length < 3 &&
        (word.includes("A") ||
          word.includes("E") ||
          word.includes("I") ||
          word.includes("O") ||
          word.includes("U"))
        // (word.startsWith("A") || word.startsWith("E") || word.startsWith("O"))
      ) {
        palindromesThatOnlyContainVowelsDict[letter] = word;
      }
    }
  }
}
console.log({ palindromesThatOnlyContainVowelsDict });

let shortestOutputtedWord;
let shortestOfEqualLength = [];
let shortestOutputtedWordPlus3 = [];
for (const word of wordArray) {
  if (!shortestOutputtedWord || word.length < shortestOutputtedWord.length) {
    shortestOutputtedWord = word;
  }
}
for (const word of wordArray) {
  if (word.length === shortestOutputtedWord.length) {
    shortestOfEqualLength.push(word);
  }
}
for (const word of wordArray) {
  if (word.length === shortestOutputtedWord.length + 3) {
    shortestOutputtedWordPlus3.push(word);
  }
}
console.log({ shortestOutputtedWord });
console.log({ shortestOfEqualLength });
console.log({ shortestOutputtedWordPlus3 });

const palindromesThatOnlyContainVowelsArray = [];
for (const word of wordArray) {
  const revWord = word.split("").reverse().join("");
  if (word === revWord) {
    // below outputs all shortest palindromes including mm
    // can refactor this to only output vowel-only palindromes
    // if (!shortestOutputtedWord || word.length < shortestOutputtedWord.length) {
    //   shortestOutputtedWord = word;
    // }
    if (!shortestOutputtedWord || word.length < shortestOutputtedWord.length) {
      shortestOutputtedWord = word;
    }
    if (
      word.length === shortestOutputtedWord.length &&
      !word.includes("B") &&
      !word.includes("C") &&
      !word.includes("D") &&
      !word.includes("F") &&
      !word.includes("G") &&
      !word.includes("H") &&
      !word.includes("J") &&
      !word.includes("K") &&
      !word.includes("L") &&
      !word.includes("M") &&
      !word.includes("N") &&
      !word.includes("P") &&
      !word.includes("Q") &&
      !word.includes("R") &&
      !word.includes("S") &&
      !word.includes("T") &&
      !word.includes("V") &&
      !word.includes("W") &&
      !word.includes("X") &&
      !word.includes("Y") &&
      !word.includes("Z")
    ) {
      palindromesThatOnlyContainVowelsArray.push(word);
    }
  }
  if (palindromesThatOnlyContainVowelsArray.length === 0) {
    console.log("PALINDROMES ONLY CONTAINING VOWELS DO NOT EXIST");
  }
}
console.log({ palindromesThatOnlyContainVowelsArray });

// test case
// expected output is at least 3 all vowel palindromes
// those palindromes are AA, EE, OO
// let doOtherPalindromesBesidesAAExist = [];
// for (const word of wordArray) {
//   if (word.startsWith("YY") && word.length < 5) {
//     doOtherPalindromesBesidesAAExist.push(word);
//   }
// }
// console.log({ doOtherPalindromesBesidesAAExist });

// if (
//   word.includes("B") ||
//   word.includes("C") ||
//   word.includes("D") ||
//   word.includes("F") ||
//   word.includes("G") ||
//   word.includes("H") ||
//   word.includes("J") ||
//   word.includes("K") ||
//   word.includes("L") ||
//   word.includes("M") ||
//   word.includes("N") ||
//   word.includes("P") ||
//   word.includes("Q") ||
//   word.includes("R") ||
//   word.includes("S") ||
//   word.includes("T") ||
//   word.includes("V") ||
//   word.includes("W") ||
//   word.includes("X") ||
//   word.includes("Y") ||
//   word.includes("Z")
// )
