/* 
QUESTION
[ ] What are all of the words that have all 5 vowels, in alphabetical order? 
*/

/*
[x] arrange file system to access/read words aka data from provided text edit file
[x] create variable assigned value of empty array to store words that meet criteria
[x] for loop through array of words created by file system
[x] create variable assigned value of each word iterated
[x] set criteria that each word must include all 5 vowels
[x] add additional criteria that each vowel must be in specific position to meet criteria
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordStrings.split("\n");

const all5VowelsInAlphaOrderWords = [];

for (let i = 0; i < wordArray.length; i++) {
  let word = wordArray[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    const aPos = word.indexOf("A");
    const ePos = word.indexOf("E");
    const iPos = word.indexOf("I");
    const oPos = word.indexOf("O");
    const uPos = word.indexOf("U");

    if (aPos < ePos && ePos < iPos && iPos < oPos && oPos < uPos) {
      all5VowelsInAlphaOrderWords.push(word);
    }
  }
}
console.log({ all5VowelsInAlphaOrderWords });
