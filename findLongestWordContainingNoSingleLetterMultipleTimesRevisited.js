/* Use a function to iterate wordArr once to determine if the word meets the criteria: longest word containing each letter in it no more than once 

PSEUDOCODE (INITIAL BEFORE CURRENT REFACTOR)
- arrange file system
- create fn

- create storage for words that meet letter criteria
- create storage for longest word that meets criteria
- create storage for all words that meet criteria to handle ties
- create object to output longest word and its ties

- for loop to access each word
- create object to track letters per word
- inner for loop to access each letter
- check if letter is defined in object
- give letter value of one when added to object
- increment letter value by one for each occurrence

- break inner for loop for letters that occur more than once
- check if whole word has been checked 
- store words that meet criteria

- check if longest word is defined or if a longer word exists
- re-assign longest word to the newest longest word found
- re-assign to an array of the words the storage for all longest words that meet criteria based on the longest word that is defined as meeting the criteria
- check for words same length as longest word
- store words of same length as longest word

- return object to output longest word and ties
- console log
*/

const fs = require("fs");
const wordArr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

function getWordsWithSingleLetters(arr) {
  let allWordsWithSingleLetters = [];

  for (const word of arr) {
    const foundLetters = {};

    for (let j = 0; j < word.length; j++) {
      const letter = word[j];

      if (!foundLetters[letter]) {
        // bool per only need to know if letter is known in the object
        foundLetters[letter] = true;
      } else {
        foundLetters[letter] = false;
        break;
      }
      // the word is a valid option because it has no duplicate letters
      if (j === word.length - 1) {
        // access length of the word directly from within array
        if (
          allWordsWithSingleLetters.length === 0 ||
          word.length > allWordsWithSingleLetters[0].length
        ) {
          allWordsWithSingleLetters = [word];
          // stops reference to the old array to reference the newest array that has the longer word
        } else if (word.length === allWordsWithSingleLetters[0].length) {
          allWordsWithSingleLetters.push(word);
        }
      }
    }
  }
  return allWordsWithSingleLetters;
}
console.log(getWordsWithSingleLetters(wordArr));
