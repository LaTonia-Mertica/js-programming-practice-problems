/*
[ ] What are all of the letters that never appear consecutively in an English word? 

For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?
*/

/*
[x] arrange file system to access and read data provided in text edit file
[x] create variable assigned empty array 
[x] re-assign that variable to push in strings of words created by file system
[x] create variable assigned array of alphabet letters
[x] create array to store letters that meet criteria
[x] outer for loop through letters of alphabet
[x] create variable assigned boolean and default at false
[x] inner for loop through words in array created in step 3 above
[x] if word contains same letter back to back
[x] re-assign variable created in step 7 above to true
[x] and break
[x] outside the inner for loop, if not re-assignment done above in step 10
[x] push letter into array for letters that meet criteria
[x] console log
*/

const fs = require("fs");
const sowpodsWordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const sowpodsWordsInArray = sowpodsWordsAsStrings.split("\n");

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
const lettersInSowpodsWordsThatMeetCriteria = [];

for (const letter of alphabet) {
  let lettersDoubledExist = false;
  for (const word of allWords) {
    if (word.includes(`${letter}${letter}`)) {
      lettersDoubledExist = true;
      break;
    }
  }
  if (!lettersDoubledExist) {
    lettersInSowpodsWordsThatMeetCriteria.push(letter);
  }
}
console.log({ lettersInSowpodsWordsThatMeetCriteria });
