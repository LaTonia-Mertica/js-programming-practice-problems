/*
QUESTION: There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.

 SOLVE THIS IN TWO WAYS: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?

PSEUDOCODE (INITIAL):
[x] create array assigned to scrabble words
[x] loop through baby names array
[x] check each character of baby name AND track/store the characters
[x] assess if read in opposite direction the characters is a valid word
[x] question: significance of "VALID SCRABBLE WORD"
[x] store all valid baby names in an array
[x] console.log
[x] invoke fn

PSEUDOCODE (HINDSIGHT):
[x] assess scrabble words list (including understanding sowpods.txt previously provided for the wordplay challenges is the scrabble words list)
[x] create empty array to house ultimate output
[x] create function with descriptive fn name that reflects an action
[x] loop through baby names array name by name
[x] loop through scrabble words list word by word
[x] create if statement to:
------[x] reverse baby names
------[x] ensure baby names are read on same value as scrabble words are (ie. all lowercase; all uppercase; etc.) ... for this use case that means all being uppercase
------[x] check if reversed baby names are equal to any words in scrabble words list
------[x] add into array for ultimate output all reversed baby names that are valid scrabble words
[x] wrap program calls in timers
[x] console log
[x] invoke fn  
*/

// only need to requre fs once for multiple use cases below
const fs = require("fs");
const namesStr = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .trim();
const namesArr = namesStr.toUpperCase().split("\n");

const scrabbleWordsStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .trim();
const scrabbleWordsArr = scrabbleWordsStr.toUpperCase().split("\n");

// simple test case to get reverse working
// const stringEx = "Example";
// console.log(stringEx.split("").reverse().join("").toUpperCase());

// array program
let namesValidScrabbleWordsArray = [];
let namesValidScrabbleWordsArrayReversed = [];

const showNamesValidScrabbleWordsArray = () => {
  for (let name of namesArr) {
    for (let word of scrabbleWordsArr) {
      if (name.split("").reverse().join("").toUpperCase() === word) {
        namesValidScrabbleWordsArray.push(name);
        namesValidScrabbleWordsArrayReversed.push(
          name.split("").reverse().join("").toUpperCase()
        );
      }
    }
  }
  console.log(
    "\nARRAY METHOD TO NAMES THAT ARE VALID SCRABBLE WORDS WHEN READ BACKWARDS: ",
    namesValidScrabbleWordsArray
  );
  console.log(
    "REVERSE READ OF NAMES THAT ARE VALID SCRABBLE WORDS WHEN READ BACKWARDS: ",
    namesValidScrabbleWordsArrayReversed
  );
};
// NOTE: array program time alters w/diff runs
// start tracking time it takes for the array program to run
var start = new Date().getTime();
showNamesValidScrabbleWordsArray();
// stop tracking time it takes for the array program to run
var end = new Date().getTime();
console.log("ARRAY PROGRAM RUN TIME: ", end - start + " ms\n");

// dictionary program
// dictionary to track/store words in dictionary
const scrabbleWordsDict = {};
for (let word of scrabbleWordsArr) {
  scrabbleWordsDict[word] = "";
}

let namesValidScrabbleWordsDictionary = [];
let namesReverseReadDictionary = [];

const showNamesValidScrabbleWordsDictionary = () => {
  for (let name of namesArr) {
    // refactored code commented out below in this fn to single line using if name statement w/methods 'in' words dict
    if (name.split("").reverse().join("").toUpperCase() in scrabbleWordsDict) {
      // namesArr[name] = name;
      // for (let word in scrabbleWordsDict) {
      // namesValidScrabbleWordsDictionary[namesArr[name]]++;
      // namesReverseReadDictionary[
      //   name.split("").reverse().join("").toUpperCase()
      // ]++;

      namesValidScrabbleWordsDictionary.push(name);
      namesReverseReadDictionary.push(
        name.split("").reverse().join("").toUpperCase()
      );
    }
    // }
  }
  console.log(
    "\nDICTIONARY METHOD TO NAMES THAT ARE VALID SCRABBLE WORDS WHEN READ BACKWARDS: ",
    namesValidScrabbleWordsDictionary
  );
  console.log(
    "REVERSE READ OF NAMES THAT ARE VALID SCRABBLE WORDS WHEN READ BACKWARDS: ",
    namesReverseReadDictionary
  );
};
// start tracking time it takes for the dictionary program to run
var start = new Date().getTime();
showNamesValidScrabbleWordsDictionary();
// stop tracking time it takes for the array program to run
var end = new Date().getTime();
console.log("DICTIONARY PROGRAM RUN TIME: ", end - start + " ms\n");
