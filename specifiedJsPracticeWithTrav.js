/*
What are all of the words that have a U and a Z and are less than 5 letters long?
*/

const fs = require("fs");
const wordsArr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

const uAndXUnder5LetterWords = [];
wordsArr.forEach((word) => {
  if (word.includes("U") && word.includes("Z") && word.length < 5) {
    // console.log(word);
    uAndXUnder5LetterWords.push(word);
  }
});
console.log({ uAndXUnder5LetterWords });

/*
 What are all of the words that are 5 letters long and have a “B” in the first place, an “L” in the third place, and a “T” in the last place?
 */
const specifiedLetterAndLengthWords = [];
wordsArr.forEach((word) => {
  const firstPlace = word.charAt(0);
  const thirdPlace = word.charAt(2);
  const lastPlace = word[word.length - 1];

  if (
    word.length === 4 &&
    firstPlace === "B" &&
    thirdPlace === "L" &&
    lastPlace === "T"
  ) {
    specifiedLetterAndLengthWords.push(word);
  }
});
console.log({ specifiedLetterAndLengthWords });

/*
fn: count words with letter b and letter z
*/

function getWordsWithSpecifiedLetters(arr) {
  let wordCount = 0;
  const wordsWithSpecifiedLetters = [];

  for (const word of wordsArr) {
    if (word.includes("B") && word.includes("Z")) {
      wordsWithSpecifiedLetters.push(word);
      wordCount++;
    }
  }
  return { wordCount, wordsWithSpecifiedLetters };
}
console.log(getWordsWithSpecifiedLetters(wordsArr));

/*
return one output that includes:

- a count of all words with letter A, 
- a count of all words with letter B, 
- a count of all words with letter C 

... each word may have one or both of the other letters but must a the specified letter

expected output: {A: 6236, B:127346, C:273472}
*/
const countObj = { aCount: 0, bCount: 0, cCount: 0 };

for (const word of wordsArr) {
  if (word.includes("A")) {
    countObj.aCount++;
  }
  if (word.includes("B")) {
    countObj.bCount++;
  }
  if (word.includes("C")) {
    countObj.cCount++;
  }
}
console.log({ countObj });

const countOfWordsWithLetterObj = {};
for (const word of wordsArr) {
  if (word.includes("A")) {
    if (!countOfWordsWithLetterObj["A"]) {
      countOfWordsWithLetterObj["A"] = 1;
    } else {
      countOfWordsWithLetterObj["A"]++;
    }
  }

  if (word.includes("B")) {
    if (!countOfWordsWithLetterObj["B"]) {
      countOfWordsWithLetterObj["B"] = 1;
    } else {
      countOfWordsWithLetterObj["B"]++;
    }
  }

  if (word.includes("C")) {
    if (!countOfWordsWithLetterObj["C"]) {
      countOfWordsWithLetterObj["C"] = 1;
    } else {
      countOfWordsWithLetterObj["C"]++;
    }
  }
}
console.log({ countOfWordsWithLetterObj });
