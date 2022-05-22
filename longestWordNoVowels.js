/*
- write a function that encapsulates some logic
- call that function in some additional code to solve the problem

these functions often take some argument as input and then return a boolean, so you can call the function as part of an if condition

THE CHALLENGE
What is the longest word that has no vowels (no A, E, I, O, or U)? Make sure your solution can handle ties. 

write a function that checks if a string has no vowels: take a string as an argument and return a boolean
*/

const fs = require("fs");
const wordStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordsArray = wordStrings.split("\n");

function stringHasNoVowels(str) {
  // if (!str.toUpperCase().includes("A" && "E" && "I" && "O" && "U")) {
  //   if (str.indexOf("A" && "E" && "I" && "O" && "U") === -1) {
  if (
    !str.includes("A") &&
    !str.includes("E") &&
    !str.includes("I") &&
    !str.includes("O") &&
    !str.includes("U")
  ) {
    return true;
  } else {
    return false;
  }
}
// console.log(stringHasNoVowels());

let longestWordWithNoVowels;
let longestWordsWithNoVowels = {};

for (let i = 0; i < wordsArray.length; i++) {
  const word = wordsArray[i];

  if (stringHasNoVowels(word) === true) {
    if (
      !longestWordWithNoVowels ||
      word.length > longestWordWithNoVowels.length
    ) {
      longestWordWithNoVowels = word;
      longestWordsWithNoVowels = [word];
    } else if (word.length === longestWordWithNoVowels.length) {
      longestWordsWithNoVowels.push(word);
    }
  }
}
console.log({ longestWordWithNoVowels });
console.log({ longestWordsWithNoVowels });
