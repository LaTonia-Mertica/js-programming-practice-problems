/*
QUESTION: What is the longest word that can be made without the letters in “AEIOSHRTN”?

[x] Create function to return boolean for whether a word contains letters to be excluded 

... can use this same fn for list of words containing excluded letters AND for list of words not containing excluded letters

[x] Create function to find longest word containing excluded letters
[x] Create function to find longest word not containing excluded ltters
[x] Create program that uses both functions to get the longest word AND ties

... created two for loops inside one function ... verbose but seems to output as expected 


  
NOTES:
0. Use the scrabble words list provided in the sowpods.txt file for this program
1. Letters not in the exclusion list may repeat in words that otherwise meet the criteria
2. Words that meet the criteria may include some - not all - letters not in exclusion list
3. To tie words must not include any excluded letters and be same length as longest word
*/

const fs = require("fs");
const wordArr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

function isWordThatContainsExcludedLetters(word) {
  const excludedLetters = ["A", "E", "I", "O", "S", "H", "R", "T", "N"];

  const wordLetters = word.split(""); // array
  for (letter of excludedLetters) {
    // console.log({ letter });
    if (wordLetters.includes(letter)) {
      return true;
    }
  }
  return false;
}
// console.log(isWordThatContainsExcludedLetters("LUB"));

function listWordsPerLetterSet(arr) {
  const specifiedWordsObj = {
    yessers: [],
    noers: [],
  };

  for (const word of arr) {
    if (isWordThatContainsExcludedLetters(word)) {
      specifiedWordsObj.yessers.push(word);
    } else {
      specifiedWordsObj.noers.push(word);
    }
  }
  return specifiedWordsObj;
}
// console.log(listWordsPerLetterSet(wordArr));
// access specific output instead of all ex below
// console.log(listWordsPerLetterSet(wordArr).noers);
// above console log also can be written as below
// const myObj = listWordsPerLetterSet(wordArr);
// console.log(myObj.yessers);

function findLongestWordsPerLetterSet() {
  const longestWordsByLetterSetObj = {};

  let longestYesserWordByLetterSet;
  let longestNoerWordByLetterSet;

  let allLongestYesserWordsByLetterSet = [];
  let allLongestNoerWordsByLetterSet = [];

  for (const word of listWordsPerLetterSet(wordArr).yessers) {
    if (
      !longestYesserWordByLetterSet ||
      word.length > longestYesserWordByLetterSet.length
    ) {
      longestYesserWordByLetterSet = word;
      allLongestYesserWordsByLetterSet = [word];
    } else if (word.length === longestYesserWordByLetterSet.length) {
      allLongestYesserWordsByLetterSet.push(word);
    }
    longestWordsByLetterSetObj.yessers = allLongestYesserWordsByLetterSet;
  }

  for (const word of listWordsPerLetterSet(wordArr).noers) {
    if (
      !longestNoerWordByLetterSet ||
      word.length > longestNoerWordByLetterSet.length
    ) {
      longestNoerWordByLetterSet = word;
      allLongestNoerWordsByLetterSet = [word];
    } else if (word.length === longestNoerWordByLetterSet.length) {
      allLongestNoerWordsByLetterSet.push(word);
    }
    longestWordsByLetterSetObj.noers = allLongestNoerWordsByLetterSet;
  }
  return longestWordsByLetterSetObj;
}
console.log(findLongestWordsPerLetterSet());
