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

function getWordsContainingLetterChainInAnyOrder() {
  const wordsContainingLetterChainInAnyOrder = [];
  for (const word of wordArr) {
    if (
      word.includes("A") &&
      word.includes("B") &&
      word.includes("C") &&
      word.includes("D") &&
      word.includes("E") &&
      word.includes("F")
    ) {
      wordsContainingLetterChainInAnyOrder.push(word);
    }
  }
  return wordsContainingLetterChainInAnyOrder;
}
console.log(getWordsContainingLetterChainInAnyOrder());

/*
 PART 2 OF 3
    - Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain. .. does this mean to check for a letter chain that starts anywhere in alphabet ... need dynamic start and end to solve...  NO, IT IS NOT THE LONGEST LETTER CHAIN */

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
const wordsContainingLongerLetterChainInAnyOrder = [];
let endRangeIdx = 6;
const baseLetters = letters.slice(0, endRangeIdx);
// console.log({ baseLetters });

for (const word of wordArr) {
  let isValidWord = true;

  for (const letter of baseLetters) {
    if (!word.includes(letter)) {
      isValidWord = false;
    }
  }

  if (isValidWord) {
    wordsContainingLongerLetterChainInAnyOrder.push(word);
  }
}
if (wordsContainingLongerLetterChainInAnyOrder.length === 0) {
  baseLetters.pop();
  // console.log({ baseLetters });
}
console.log({ wordsContainingLongerLetterChainInAnyOrder });

/*
PART 3 OF 3
    - Try to find longest letter chain in alphabetical order.
*/
let result = [];
let startIdx = 0;
// let maxLength = letters.length; // 26
while (endRangeIdx <= letters.length) {
  // console.log(letters[endRangeIdx]);
  const wordsWithChain = [];

  const baseLetters = letters.slice(startIdx, endRangeIdx);
  for (const word of wordArr) {
    let isValidWord = true;

    for (const letter of baseLetters) {
      if (!word.includes(letter)) {
        isValidWord = false;
      }
    }

    if (isValidWord) {
      wordsWithChain.push(word);
      // console.log({ wordsWithChain });
    }
  }

  if (wordsWithChain.length === 0) {
    baseLetters.pop();
    // line 127
    if (baseLetters.length > result.length) {
      // line 128
      result = baseLetters;
    }
    // console.log({ baseLetters });
    // break;
    startIdx++;
  }
  endRangeIdx++;
}
console.log({ result });

// if get passed line 98 of if statement THEN
// increment the range index to check each next letter
// once line 98 is true it means we have no more letters in the chain
// and the set of letters previous to that letter make up the longest chain

// - next do a floating end index

// HOME WORK
// handle ties for max letter chains if others exist
// do not over think this
// hint: only lines that need to change are 127, 128
