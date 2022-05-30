/*
[x] What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. 

[x] What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.

CODE LOOKS BEAUTIFUL WHEN IT FUNCTIONS ACCORDING TO EXPECTATIONS!!!
*/

// arrange file system to access data from provided data source
// in this case the data is provided in a text edit file
const fs = require("fs");
// parse data into strings
const wordStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
// create array from strings
const wordArray = wordStrings.split("\n");

// function with no parameters passed
const getWordsNotContainingSpecifiedLetters = () => {
  // storage for all words without the letters
  const wordsNotContainingSpecifiedLetters = [];
  // the letters not wanted
  const specifiedLettersNotToContain = [
    "A",
    "E",
    "I",
    "O",
    "S",
    "H",
    "R",
    "T",
    "N",
  ];

  // outer for loop to access each word in array
  for (let i = 0; i < wordArray.length; i++) {
    // value of word stored in variable
    const word = wordArray[i];
    // inner for loop to access each letter of each word in array
    for (let j = 0; j < word.length; j++) {
      // value of letter stored in variable
      const letter = word[j];

      // check if list of letters not wanted contains letter of word
      if (specifiedLettersNotToContain.includes(letter)) {
        // when word contains any of the letters stop the inner loop
        break;
        // otherwise check if at end of the word
      } else if (j === word.length - 1) {
        // when at end of the word and word has none of letters not wanted
        // and that word to the storage
        wordsNotContainingSpecifiedLetters.push(word);
      }
    }
  }
  // return storage containing needed output
  return wordsNotContainingSpecifiedLetters;
};
// console log function to get output from return statement
console.log(getWordsNotContainingSpecifiedLetters());

// variable fs can only occur once in a file
// this fs variable is included to illustrate what would be here if not using fs already declared at top of the file ... reason commented out here
// const fs = require("fs");

// parse data source into strings
const wordStr = fs
  // read the data source file
  .readFileSync("sowpods.txt")
  // convert to string using utf-8 area/regional formatting
  .toString("utf-8")
  // convert to capitalized
  .toUpperCase()
  // remove empty lines at start and/or end of data source file if applicable
  .trim();
// create array with data in strings
const wordArr = wordStr.split("\n");

// function
const getLongestWordsNotContainingListedLetters = () => {
  // variable without assignment of value for storage
  let longestWordNotContainingListedLetters;
  // storage
  const allWordsNotContainingListedLetters = [];
  // storage
  let allLongestWordsNotContainingListedLetters = [];
  // letters to avoid
  const listedLetters = ["A", "E", "I", "O", "S", "H", "R", "T", "N"];

  // outer for loop to access each word in array
  for (let i = 0; i < wordArr.length; i++) {
    // word variable
    const word = wordArr[i];
    // inner for loop to access each letter of each word in array
    for (let j = 0; j < word.length; j++) {
      // letter variable
      const letter = word[j];

      // check if list of letters to avoid contains any letters in a word being iterated ... actually this inner loop breaks as soon as a single match is found (meaning not all letters are checked before the loop stops)
      if (listedLetters.includes(letter)) {
        // break when condition met
        break;
        // otherwise check if whole word has been checked
      } else if (j === word.length - 1) {
        // when whole word checked and no match with letters to avoid
        // add that word to the storage object ... in this case an array
        allWordsNotContainingListedLetters.push(word);
      }
    }
  }

  // for loop to access each word of storage containing all
  // words with out any of the letters to avoid
  for (const word of allWordsNotContainingListedLetters) {
    // check if the variable to store the longest word that meets criteria is undefined
    // when it is undefined or has a length less than another word that meets the criteria
    if (
      !longestWordNotContainingListedLetters ||
      word.length > longestWordNotContainingListedLetters.length
    ) {
      // re-assign the longest word variable to that longer word that meets the criteria, too
      longestWordNotContainingListedLetters = word;
      // also tell the program that the storage for the array will accept
      // each subsequent word that meets the criteria
      allLongestWordsNotContainingListedLetters = [word];
      // check for words of same length as the first found longest word that meets the criteria
    } else if (word.length === longestWordNotContainingListedLetters.length) {
      // store all words that meet the criteria to handle the ties
      allLongestWordsNotContainingListedLetters.push(word);
    }
  }
  // return statement to output needed content
  return (
    "LONGEST WORD: " +
    longestWordNotContainingListedLetters +
    "\n" +
    "ALL LONGEST WORDS: " +
    allLongestWordsNotContainingListedLetters
  );
};
// console log function to get output
console.log(getLongestWordsNotContainingListedLetters());
// console.log(
//   { allWordsNotContainingListedLetters },
//   { longestWordNotContainingListedLetters },
//   { allLongestWordsNotContainingListedLetters }
// );
