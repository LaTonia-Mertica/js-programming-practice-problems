const fs = require("fs");
const wordArr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

/*
QUESTION
Finding alphabet chains:
    PART 1 OF 3
    - First, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?
        - For example, “FEEDBACK” is an answer to this question

    PSEUDOCODE
    - arrange file system
    - storage for words that meet criteria
    - check that each word includes the lettewrs A, B, C, D, E, F (can be in any order)
    - put in a fn
    - console log
*/
const wordsAToF = [];
for (const word of wordArr) {
  if (
    word.includes("A") &&
    word.includes("B") &&
    word.includes("C") &&
    word.includes("D") &&
    word.includes("E") &&
    word.includes("F")
  ) {
    wordsAToF.push(word);
  }
}
console.log("\n", { wordsAToF }, "\n");

/*
 PART 2 OF 3
    - Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain. .. does this mean to check for a letter chain that starts anywhere in alphabet ... need dynamic start and end to solve... */

const letters = [
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
const longestLetterChainStartingAtLetterA = {};
const endIdx = 6;
const baseLetters = letters.slice(0, endIdx);

for (const word of wordArr) {
  let hasLetterChain = true;
  for (const letter of baseLetters) {
    if (!word.includes(letter)) {
      hasLetterChain = false;
    } else if (hasLetterChain) {
      longestLetterChainStartingAtLetterA[letter] = "👍";
    }
  }
}
// console.log(
//   { longestLetterChainStartingAtLetterA },
//   "\nA TO F IS LONGEST LETTER CHAIN WHEN STARTING AT LETTER A\n"
// );

/*
PART 3 OF 3
    - Try to find longest letter chain in alphabetical order.
*/
// empty array
// for initial comparison of lengths
// then re-assignment between arrays
let longestLetterChain = [];
// storage
const allLetterChains = [];
// to start at beginning of letters array
let startIdx = 0;
// to stop at end of letters array
let stopIdx = 0;

while (stopIdx <= letters.length) {
  // blind storage
  // not for output
  // push is for length
  const letterChainWords = [];
  const baseLetters = letters.slice(startIdx, stopIdx);

  for (const word of wordArr) {
    let isLetterChainWord = true;

    for (const letter of baseLetters) {
      if (!word.includes(letter)) {
        isLetterChainWord = false;
      }
    }
    if (isLetterChainWord) {
      letterChainWords.push(word);
    }
  }

  if (letterChainWords.length === 0) {
    baseLetters.pop();

    if (baseLetters.length > longestLetterChain.length) {
      longestLetterChain = baseLetters;
      allLetterChains.push(longestLetterChain);
    }
    startIdx++;
  }
  stopIdx++;
}
console.log({ longestLetterChain });
// nToUWords produces sought output
const nToUWords = [];
for (const word of wordArr) {
  if (
    word.includes("N") &&
    word.includes("O") &&
    word.includes("P") &&
    word.includes("Q") &&
    word.includes("R") &&
    word.includes("S") &&
    word.includes("T") &&
    "U"
  ) {
    nToUWords.push(word);
  }
}
console.log({ nToUWords }, "\n");

console.log("SECOND LONGEST LETTER CHAIN: ", allLetterChains[1]);
// output though second to longest letter chain
const cToIWords = [];
for (const word of wordArr) {
  if (
    word.includes("C") &&
    word.includes("D") &&
    word.includes("E") &&
    word.includes("F") &&
    word.includes("G") &&
    word.includes("H") &&
    word.includes("I")
  ) {
    cToIWords.push(word);
  }
}
console.log({ cToIWords }, "\n");

console.log("FIRST & SHORTEST LETTER CHAIN: ", allLetterChains[0]);
// output though shortest letter chain
const aToFWords = [];
for (const word of wordArr) {
  if (
    word.includes("A") &&
    word.includes("B") &&
    word.includes("C") &&
    word.includes("D") &&
    word.includes("E") &&
    word.includes("F")
  ) {
    aToFWords.push(word);
  }
}
console.log({ aToFWords }, "\n");
