// run time is (very) long
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
// store collection of words that meet criteria
const compounds = [];
// data source
const words = [
  "BUTTER",
  "BUTTERCUP",
  "CONE",
  "CUP",
  "DEW",
  "HONEY",
  "HONEYSWEET",
  "PAT",
  "PRETTY",
  "PRETTYDEW",
  "SNOW",
  "SNOWCONE",
];
// iterate array of words for each word
for (const word of words) {
  // iterate each word for each letter
  for (let i = 0; i < word.length; i++) {
    // variables for parts of word need
    const wordUno = word.slice(0, i + 1);
    const wordDos = word.slice(i + 1);
    // whether both parts of word need are in reference word
    if (words.indexOf(wordUno) !== -1 && words.indexOf(wordDos) !== -1) {
      // push to store
      compounds.push(word);
    }
  }
}
// time
// log
const elComienzo = performance.now();
console.log("\n", { compounds });
const detengase = performance.now();
console.log(detengase - elComienzo + " MS COMPOUNDS RUN TIME\n");
