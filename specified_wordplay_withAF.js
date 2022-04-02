// function
// pass in array of letters
// output all words that contain those letters
// NOTE: it is ok to have other letters for these words

const fs = require("fs");
const strings = fs.readFileSync("sowpods.txt").toString("utf-8");
const sowpodsWords = strings.split("\n");

function specifiedLettersFn(arr) {
  const getWordsThatMeetLetterCriteria = [];

  for (const word of sowpodsWords) {
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      if (arr.includes(letter) && word.length <= 5 && j === word.length - 1) {
        getWordsThatMeetLetterCriteria.push(word);
      }
    }
  }
  return getWordsThatMeetLetterCriteria;
}
console.log(specifiedLettersFn(["Z"]));

// CODE BUILT AND TESTED OUTSIDE FUNCTION UNTIL WORKS
// const getWordsThatMeetLetterCriteria = [];
// const lettersToFind = ["Z"];

// for (const word of sowpodsWords) {
//   for (let j = 0; j < word.length; j++) {
//     const letter = word[j];
//     if (
//       lettersToFind.includes(letter) &&
//       word.length <= 5 &&
//       j === word.length - 1
//     ) {
//       getWordsThatMeetLetterCriteria.push(word);
//     }
//   }
// }
// console.log({ getWordsThatMeetLetterCriteria });

function specifiedStringsFn(str) {
  const getWordsThatMeetStringCriteria = [];
  for (const word of sowpodsWords) {
    if (word.substring(word.length - 3) === str && word.length - 1) {
      getWordsThatMeetStringCriteria.push(word);
    }
  }
  return getWordsThatMeetStringCriteria;
}
console.log(specifiedStringsFn("ESS"));

// const getWordsThatMeetStringCriteria = [];
// const stringsToFind = "ESS";
// for (const word of sowpodsWords) {
//   if (word.substring(word.length - 3) === stringsToFind && word.length - 1) {
//     getWordsThatMeetStringCriteria.push(word);
//   }
// }
// console.log({ getWordsThatMeetStringCriteria });
