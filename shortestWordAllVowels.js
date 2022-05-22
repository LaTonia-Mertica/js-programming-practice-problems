/*
- write a function that encapsulates some logic
- call that function in some additional code to solve the problem

these functions often take some argument as input and then return a boolean, so you can call the function as part of an if condition

THE QUESTION
What is the shortest word that has all of the vowels? 

- handle ties

write a function that checks if a string has all of the vowels: take a string as an argument and return a boolean)

note: I was taught parameters go into the function and arguments are passed to get output from function .... basically same difference
*/
const fs = require("fs");
const wordStrs = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArray = wordStrs.split("\n");

function wordHasAllVowels(str) {
  // for test ran includes with all lowercase letters
  // changed includes to contain all uppercase letters to work with the subsequent for loop ... otherwise outputs undefined
  if (
    str.includes("A") &&
    str.includes("E") &&
    str.includes("I") &&
    str.includes("O") &&
    str.includes("U")
  ) {
    return true;
  } else {
    return false;
  }
}
//console.log(wordHasAllVowels());

let shortestWordAllVowels;
let shortestWordsAllVowels = [];

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];

  if (wordHasAllVowels(word) === true) {
    if (!shortestWordAllVowels || word.length < shortestWordAllVowels.length) {
      shortestWordAllVowels = word;
      shortestWordsAllVowels = [word];
    } else if (word.length === shortestWordAllVowels.length) {
      shortestWordsAllVowels.push(word);
    }
  }
}
console.log({ shortestWordAllVowels });
console.log({ shortestWordsAllVowels });
