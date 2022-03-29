/* 
QUESTION
[ ] What are all of the words with no vowel and not even a Y? 
*/

/*
[x] arrange file system to access/read data aka words from provided text edit file
[x] create variable assigned value of each word iterated
[x] for loop through array of words created by file system
[x] create variable assigned value of each word iterated
[x] set exclusion criteria for words to store that meet criteria
[x] store words that meet criteria
[x] console log

NOTES:
- I've done file system enough times to have it memorized
- utf-8 just means which region to translate to/for
- \n means new line as in to split each word string into a new line 
- use const unless and/or until need to use let

- IN GENERAL: Take the path of least resistance ... skills will improve with time
- IN THIS CASE: Least resistance was writing out each includes for the if statement ... because being verbose may be safer
- This needs to state NOT INCLUDES
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordsAsStrings.split("\n");

const noAEIOUYWords = [];

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    noAEIOUYWords.push(word);
  }
}
console.log({ noAEIOUYWords });
