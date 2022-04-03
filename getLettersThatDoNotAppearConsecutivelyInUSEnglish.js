/*
[ ] What are all of the letters that never appear consecutively in an English word? 

For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?
*/
/*
[] arrange file system to access and read data in provided text edit file
[] create variable assigned to empty array ... this empty array will be referenced in the inner for loop that iterates through each word
[] re-assign empty array to push in all words from the strings (strings not array) created by the file system
[] create variable assigned array of alphabet letters
[] create variable assigned empty array to store letters that meet the criteria
[] outer/main for loop through array of alphabet letters
[] create variable assigned value of false that there are double letters
[] inner for loop through each word AND 
[] if word contains two of same letter in a row THEN
[] re-assign variable assigned value of false to true that there are double letters AND
[] break
[] in a separate if statement after inner for loop but inside main for loop if not variable assigned value of false then true that there are double letters THEN
[] push letter to specified array
[] console log
*/
const fs = require("fs");
const sowpodsWordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const arrayOfSowpodsWords = sowpodsWordsAsStrings.split("\n");

let allWords = [];
allWords.push(sowpodsWordsAsStrings);
const alphabet = [
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

let getLettersThatDoNotAppearConsecutivelyInAnEnglishWord = [];

for (const letter of alphabet) {
  let doubleLetterExists = false;
  for (const word of allWords) {
    if (word.includes(`${letter}${letter}`)) {
      doubleLetterExists = true;
      break;
    }
  }
  if (!doubleLetterExists) {
    getLettersThatDoNotAppearConsecutivelyInAnEnglishWord.push(letter);
  }
}

console.log({ getLettersThatDoNotAppearConsecutivelyInAnEnglishWord });
