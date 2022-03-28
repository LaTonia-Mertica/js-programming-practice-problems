/*
QUESTION
What are all of the words that both start with a “TH” and end with a “TH”?
*/

//set up file system to read text file with data
// variable to store words that meet criteria
// for loop through array to access each word
// define variable to shorthand each word iterated in array
// check for specified letters at start and end of each word
// store words that meet criteria
// console log

const fs = require("fs");
const wordsInStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsPerLine = wordsInStrings.split("\n");

const startandend_th_words = [];

for (let i = 0; i < wordsPerLine.length; i++) {
  let word = wordsPerLine[i];
  if (word.startsWith("TH") && word.endsWith("TH")) {
    startandend_th_words.push(word);
  }
}
console.log({ startandend_th_words });
