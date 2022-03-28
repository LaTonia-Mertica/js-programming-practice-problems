/*
QUESTION
What are all of the words that have a U and an Z and are less than 5 letters long?
*/

// set up file system to read data from text edit file
// create array to store words that meet criteria
// for loop to iterate array with data set
// variable as shorthand for each word accessed in for loop over array
// check that each word has specified letters and proper length
// store words that meet criteria
// console log

const fs = require("fs");
const wordsStr = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = wordsStr.split("\n");

const letter_uandz_lessthan5_words = [];

for (let i = 0; i < wordsByLine.length; i++) {
  let word = wordsByLine[i];
  if (word.includes("U") && word.includes("Z") && word.length < 5) {
    letter_uandz_lessthan5_words.push(word);
  }
}
console.log({ letter_uandz_lessthan5_words });
