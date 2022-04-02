const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordStrings.split("\n");

let onlyVowelLetterUWords = [];

for (const word of wordArray) {
  if (
    word.includes("U") &&
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O")
  ) {
    onlyVowelLetterUWords.push(word);
  }
}
console.log({ onlyVowelLetterUWords });
