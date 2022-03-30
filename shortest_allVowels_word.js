/* 
QUESTION
[ ] What is the shortest word that contains all 5 vowels? 
*/

/*
[x] declare variable without assignment to store shortest word
[x] set criteria that if shortest word does not exist or if a word is shorter then shortest word is that word
[x] console log
*/

const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordStrings.split("\n");

let shortestWithAllVowelsWord;

for (let i = 0; i < wordArray.length; i++) {
  let word = wordArray[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !shortestWithAllVowelsWord ||
      word.length < shortestWithAllVowelsWord.length
    ) {
      shortestWithAllVowelsWord = word;
    }
  }
}
console.log({ shortestWithAllVowelsWord });
