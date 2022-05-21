// Get shortest word consisting of only single letters - meaning no letter is in the word more than once

/*
[x] file system to access and read data from provided data source
[x] use sowpods.txt as the data source

[x] fn to tally letters of each word ... best data structure is obj
[x] define fn as bool
[x] remember to include the return statement for exclusion condition
[x] remember to include main fn return statement for inclusion condition
[x] test fn works with test data (not official data source)

[x] for loop to access official data source
[x] in for loop, check if value of fn is what we need to get words with only single letters ... in this exercise we need a value of 'true'
[x] in for loop, check if variable for shortest word that meets criteria is defined
[x] in for loop, check if variable for shortest word that meets criteria is shorter than any word iterated via official data source
[x] re-assign variable for shortest word that meets criteria
[x] console log

[x] if successful, then try to handle ties for shortest word that meets criteria - meaning all shortest words that meet criteria
*/

const fs = require("fs");
const wordString = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArray = wordString.split("\n");

const wordHasSingleLettersOnly = (str) => {
  const lettersToWord = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (lettersToWord[letter] === undefined) {
      lettersToWord[letter] = 1;
    } else {
      lettersToWord[letter]++;
      // we need the function to output a value of not true aka false if the question 'Does the word consist of single letters only - no duplicate letters?'
      return false;
    }
  }
  // because of how we worded our function we are seeking an output of true
  // test
  //return lettersToWord;
  return true;
};
// the tests
// we should get false
// console.log(wordHasSingleLettersOnly("SupercalifabulousDeliciousSuperdocious"));
// we should get true
//console.log(wordHasSingleLettersOnly("SuperFab"));

let shortestWordOfSingleLetters;
// storage for all words that meet criteria - handling ties
let allShortestWordOfSingleLettersWords = [];

for (const word of wordArray) {
  if (wordHasSingleLettersOnly(word) === true) {
    if (
      !shortestWordOfSingleLetters ||
      word.length < shortestWordOfSingleLetters.length
    ) {
      shortestWordOfSingleLetters = word;
      // informing our program that the array we have for storage will be re-assigned to a value of each word added to the array
      allShortestWordOfSingleLettersWords = [word];
    } else if (word.length === shortestWordOfSingleLetters.length) {
      // adding each word of same length of our variable to the array ... at this point we know each word meets the criteria
      allShortestWordOfSingleLettersWords.push(word);
    }
  }
}
// single output
console.log({ shortestWordOfSingleLetters });
// handling ties out
// handling ties should give us an output of the first word we saw first in the array followed by other words that meet the criteria
console.log({ allShortestWordOfSingleLettersWords });
// we did it - all!
