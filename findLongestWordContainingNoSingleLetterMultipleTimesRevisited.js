/* Use a function to iterate wordArr once to determine if the word meets the criteria: longest word containing each letter in it no more than once 

PSEUDOCODE
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
  const wordsWithSingleLetters = [];
  let longestWordThatMeetsCriteria;
  let allWordsWithSingleLetters = [];
  const singleLettersWordsObj = {};

  for (const word of arr) {
    const letterPerWordCountObj = {};
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      if (letterPerWordCountObj[letter] === undefined) {
        letterPerWordCountObj[letter] = 1;
      } else {
        letterPerWordCountObj[letter]++;
      }
      if (letterPerWordCountObj[letter] > 1) {
        break;
      } else if (j === word.length - 1) {
        wordsWithSingleLetters.push(word);
      }
    }
  }

  for (word of wordsWithSingleLetters) {
    if (
      !longestWordThatMeetsCriteria ||
      word.length > longestWordThatMeetsCriteria.length
    ) {
      longestWordThatMeetsCriteria = word;
      allWordsWithSingleLetters = [word];
    } else if (word.length === longestWordThatMeetsCriteria.length) {
      allWordsWithSingleLetters.push(word);
    }
  }
  return (singleLettersWordsObj[longestWordThatMeetsCriteria] =
    allWordsWithSingleLetters);
}
console.log(getWordsWithSingleLetters(wordArr));
