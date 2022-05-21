/*
What is the longest word that is made of single letters?

- one fn to return bool value re: whether word in separate for loop has only single letters

- separate for loop to check that word is longest while also using the bool value from fn for no-repeat criteria
*/

// file system
// use sowpods list of scrabble words
const fs = require("fs");
const wordStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArr = wordStr.split("\n");

// fn to count letters and return boolean value
// standard is to use naming convention consistent with boolean - meaning true v false
function hasDuplicateLetters(str) {
  const wordLetterCount = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (wordLetterCount[letter] === undefined) {
      wordLetterCount[letter] = 1;
    } else {
      // if this is our output then this return will take effect
      wordLetterCount[letter]++;
      return true;
    }
  }
  // if there are no letters that occur more than once in the word then this return will take effect
  return false;
}
// using "apple" to test that separate fn works
// console.log(hasDuplicateLetters("apple"));
// for the str aka string apple we should get an output aka return value of true
// in our for loop we do next our goal is to get the longest word that has no repeat letters anywhere inside of it

// variable declared and un-assigned a value to store the word that meets our criteria
let longestNonDuplicateLetterWord;

for (const word of wordArr) {
  if (hasDuplicateLetters(word) === false) {
    if (
      !longestNonDuplicateLetterWord ||
      word.length > longestNonDuplicateLetterWord.length
    ) {
      longestNonDuplicateLetterWord = word;
    }
  }
}
console.log({ longestNonDuplicateLetterWord });
// we should see a long word that has no one letter more than once
// we did it!
