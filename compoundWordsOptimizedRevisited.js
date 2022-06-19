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
// storage for output
const compoundWordArrayObject = [];
// word list
const words = ["HE", "MIRROR", "HEHE", "MIRRORMIRROR", "YAY", "YAYAY"];
// loop through words
words.forEach((word) => {
  // loop through letters
  for (let i = 0; i < word.length; i++) {
    // variable for one word
    const oneWord = word.slice(0, i + 1);
    // variable for other word
    const otherWord = word.slice(i + 1);
    // when both words in array
    if (words.includes(oneWord) && words.includes(otherWord)) {
      // store the word those words are in
      compoundWordArrayObject.push(word);
    }
  }
});
// console log and time how long takes to output
const startNow = performance.now();
console.log("\n", { compoundWordArrayObject });
const stopNow = performance.now();
console.log(stopNow - startNow + " MS COMPOUND WORD ARRAY OBJECT RUN TIME");
