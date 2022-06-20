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
// console.log(getWordsContainingLetterChainInAnyOrder());

/*
 PART 2 OF 3
    - Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain. .. does this mean to check for a letter chain that starts anywhere in alphabet ... need dynamic start and end to solve...  NO, IT IS NOT THE LONGEST LETTER CHAIN */

// solution returns initial letter chain per no longer letter chain stemming beyond initial letter chain ie. initial letter chain is a to f and there are no words that have a letter chain of a to g
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
// console.log({ wordsContainingLongerLetterChainInAnyOrder });

/*
PART 3 OF 3
    - Try to find longest letter chain in alphabetical order.
*/
let result = [];
let letterChains = [];
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
      letterChains.push(result);
    }

    // console.log({ baseLetters });
    // break;
    startIdx++;
  }
  endRangeIdx++;
}
console.log({ result }, { letterChains });

// if get passed line 98 of if statement THEN
// increment the range index to check each next letter
// once line 98 is true it means we have no more letters in the chain
// and the set of letters previous to that letter make up the longest chain

// - next do a floating end index

// HOME WORK
// handle ties for max letter chains if others exist
// do not over think this
// hint: only lines that need to change are 127, 128

// test cases ... per resultTiesArr output
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
console.log({ aToFWords });

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
console.log({ cToIWords });

// only nToUWords produces output
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
console.log({ nToUWords });

const bToGWords = [];
for (const word of wordArr) {
  if (
    word.includes("B") &&
    word.includes("C") &&
    word.includes("D") &&
    word.includes("E") &&
    word.includes("F") &&
    word.includes("G")
  ) {
    bToGWords.push(word);
  }
}
// console.log({ bToGWords });

// no output
const dToJWords = [];
for (const word of wordArr) {
  if (
    word.includes("D") &&
    word.includes("E") &&
    word.includes("F") &&
    word.includes("G") &&
    word.includes("H") &&
    word.includes("I") &&
    word.includes("J")
  ) {
    dToJWords.push(word);
  }
}
// console.log({ dToJWords });

// no output
const eToKWords = [];
for (const word of wordArr) {
  if (
    word.includes("E") &&
    word.includes("F") &&
    word.includes("G") &&
    word.includes("H") &&
    word.includes("I") &&
    word.includes("J") &&
    word.includes("K")
  ) {
    eToKWords.push(word);
  }
}
// console.log({ eToKWords });

// no output
const fToLWords = [];
for (const word of wordArr) {
  if (
    word.includes("F") &&
    word.includes("G") &&
    word.includes("H") &&
    word.includes("I") &&
    word.includes("J") &&
    word.includes("K") &&
    word.includes("L")
  ) {
    fToLWords.push(word);
  }
}
// console.log({ fToLWords });

// no output
const gToMWords = [];
for (const word of wordArr) {
  if (
    word.includes("G") &&
    word.includes("H") &&
    word.includes("I") &&
    word.includes("J") &&
    word.includes("K") &&
    word.includes("L") &&
    word.includes("M")
  ) {
    gToMWords.push(word);
  }
}
// console.log({ gToMWords });

// no output
const hToNWords = [];
for (const word of wordArr) {
  if (
    word.includes("H") &&
    word.includes("I") &&
    word.includes("J") &&
    word.includes("K") &&
    word.includes("L") &&
    word.includes("M") &&
    word.includes("N")
  ) {
    hToNWords.push(word);
  }
}
// console.log({ hToNWords });

// no output
const iToOWords = [];
for (const word of wordArr) {
  if (
    word.includes("I") &&
    word.includes("J") &&
    word.includes("K") &&
    word.includes("L") &&
    word.includes("M") &&
    word.includes("N") &&
    word.includes("O")
  ) {
    iToOWords.push(word);
  }
}
// console.log({ iToOWords });

// no output
const jToPWords = [];
for (const word of wordArr) {
  if (
    word.includes("J") &&
    word.includes("K") &&
    word.includes("L") &&
    word.includes("M") &&
    word.includes("N") &&
    word.includes("O") &&
    word.includes("P")
  ) {
    jToPWords.push(word);
  }
}
// console.log({ jToPWords });

// no output
const kToQWords = [];
for (const word of wordArr) {
  if (
    word.includes("K") &&
    word.includes("L") &&
    word.includes("M") &&
    word.includes("N") &&
    word.includes("O") &&
    word.includes("P") &&
    word.includes("Q")
  ) {
    kToQWords.push(word);
  }
}
// console.log({ kToQWords });

// no output
const lToRWords = [];
for (const word of wordArr) {
  if (
    word.includes("L") &&
    word.includes("M") &&
    word.includes("N") &&
    word.includes("O") &&
    word.includes("P") &&
    word.includes("Q") &&
    word.includes("R")
  ) {
    lToRWords.push(word);
  }
}
// console.log({ lToRWords });

// no output
const mToSWords = [];
for (const word of wordArr) {
  if (
    word.includes("M") &&
    word.includes("N") &&
    word.includes("O") &&
    word.includes("P") &&
    word.includes("Q") &&
    word.includes("R") &&
    word.includes("S")
  ) {
    mToSWords.push(word);
  }
}
// console.log({ mToSWords });

// no output
const oToVWords = [];
for (const word of wordArr) {
  if (
    word.includes("O") &&
    word.includes("P") &&
    word.includes("Q") &&
    word.includes("R") &&
    word.includes("S") &&
    word.includes("T") &&
    word.includes("U") &&
    word.includes("V")
  ) {
    oToVWords.push(word);
  }
}
// console.log({ oToVWords });

// no output
const pToWWords = [];
for (const word of wordArr) {
  if (
    word.includes("P") &&
    word.includes("Q") &&
    word.includes("R") &&
    word.includes("S") &&
    word.includes("T") &&
    word.includes("U") &&
    word.includes("V") &&
    word.includes("W")
  ) {
    pToWWords.push(word);
  }
}
// console.log({ pToWWords });

// no output
const qToXWords = [];
for (const word of wordArr) {
  if (
    word.includes("Q") &&
    word.includes("R") &&
    word.includes("S") &&
    word.includes("T") &&
    word.includes("U") &&
    word.includes("V") &&
    word.includes("W") &&
    word.includes("X")
  ) {
    qToXWords.push(word);
  }
}
// console.log({ qToXWords });

// no output
const rToYWords = [];
for (const word of wordArr) {
  if (
    word.includes("R") &&
    word.includes("S") &&
    word.includes("T") &&
    word.includes("U") &&
    word.includes("V") &&
    word.includes("W") &&
    word.includes("X") &&
    word.includes("Y")
  ) {
    rToYWords.push(word);
  }
}
// console.log({ rToYWords });
