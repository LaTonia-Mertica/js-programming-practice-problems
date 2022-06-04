/*
What are all of the words that are at least 8 letters long and use 3 or fewer different letters? For example, "REFERRER"is an answer to this question, because it uses only 3 different letters: R, E, and F. 

// look into sets more
// let set = new Set();
// set.add(["REFERRER", "THREE"]);
// console.log({ set });

PSEUDOCODE
- arrange file system
- create storage for words that meet criteria
- outer for loop to access each word
- variable to store each word
- create array to track each unique letter in each word
- check for words over 7 letters long
- inner for loop to access each letter of each word over 7 letters
- variable to store each letter
- when tracker does not include unique letter, add it to tracker
- check for words with 3 or less unique letters 
- store the words that meet criteria 
- console log
*/
const fs = require("fs");
const wordArr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

function getThreeOrFewerEightLetterWords() {
  const threeOrFewerEightLetterWords = [];
  for (let i = 0; i < wordArr.length; i++) {
    const word = wordArr[i];
    const uniqueLetters = [];
    if (word.length > 7) {
      for (let j = 0; j < word.length; j++) {
        const letter = word[j];
        if (!uniqueLetters.includes(letter)) {
          uniqueLetters.push(letter);
        }
      }
      if (uniqueLetters.length <= 3) {
        threeOrFewerEightLetterWords.push(word);
      }
    }
  }
  return threeOrFewerEightLetterWords;
}
console.log(getThreeOrFewerEightLetterWords());

function get3OrLessLetterWords() {
  const threeOrLessLetterWords = [];
  wordArr.forEach((word) => {
    const uniqueLetters = [];
    if (word.length > 7) {
      word.split("").forEach((letter) => {
        if (!uniqueLetters.includes(letter)) {
          uniqueLetters.push(letter);
        }
      });
      if (uniqueLetters.length <= 3) {
        threeOrLessLetterWords.push(word);
      }
    }
  });
  return threeOrLessLetterWords;
}
console.log(get3OrLessLetterWords());

// basic .forEach
// idx is just a made up label to use for index
// second param is optional
// even if add second param, can opt to not use it as seen below
const nums = [1, 2, 3, 4];
nums.forEach((num, idx) => {
  console.log({ num });
});
// console logs each number from array

// basic .map
const numbers = [1, 2, 3, 4];
const numArray = numbers.map((num, idx) => {
  return num * 2;
});
console.log({ numArray });
// console logs each number in array multiplied by 2

// below code block not expected to work
// demonstrates forEach DOES NOT return an array like map does
// because forEach does not return anything
// map returns new array after doing the work
const numArr = [1, 2, 3, 4];
const faultyArray = numArr.forEach((num, idx) => {
  return num * 2;
});
console.log({ faultyArray });
// console logs undefined
