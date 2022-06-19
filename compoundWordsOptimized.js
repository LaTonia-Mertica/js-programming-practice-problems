// const fs = require("fs");
// const wordArray = fs
//   .readFileSync("sowpods.txt")
//   .toString("utf-8")
//   .toUpperCase()
//   .trim()
//   .split("\n");

/*
QUESTION
What are all of the compound words? These are words made up of 2 smaller words. For example, “SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.
*/
// array to put words that meet criteria
const compoundWords = [];
// small manageable data source
const words = [
  "CODEDEV",
  "UN",
  "ALL",
  "CODE",
  "GOOD",
  "ALLGOOD",
  "DEV",
  "COVER",
  "TOUCHABLE",
  "UNCOVER",
];
// for loop
for (const word of words) {
  for (let i = 0; i < word.length; i++) {
    // variable assigned slice criteria to find first word
    const fWord = word.slice(0, i + 1);
    // variable assigned slice criteria to find second aka last word
    const lWord = word.slice(i + 1);
    // if statement to ensure both words are in original word
    if (words.includes(fWord) && words.includes(lWord)) {
      // adding each word to array that meets criteria
      compoundWords.push(word);
    }
  }
}
// timing and console logging output
const time = performance.now();
const listSorted = compoundWords.sort().reverse();
console.log(compoundWords);
const up = performance.now();
console.log(up - time + " MS COMPOUND WORDS RUN TIME\n");

// tried about half dozen code blocks to optimize the code
// without success 😨
// refactored to original (though severely long run time) solution
