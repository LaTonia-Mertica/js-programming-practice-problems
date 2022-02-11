/*
QUESTION: There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.

 SOLVE THIS IN TWO WAYS: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?

PSEUDOCODE (INITIAL):
- create array assigned to scrabble words
- loop through baby names array
- check each character of baby name AND track/store the characters
- assess if read in opposite direction the characters is a valid word
- question: significance of "VALID SCRABBLE WORD"
- store all valid baby names in an array
- console.log
- invoke fn

PSEUDOCODE (HINDSIGHT):
- assess scrabble words list (including understanding sowpods.txt previously provided for the wordplay challenges is the scrabble words list)
- create empty array to house ultimate output
- create function with descriptive fn name that reflects an action
- loop through baby names array name by name
- loop through scrabble words list word by word
- create if statement to:
------- reverse baby names
------- ensure baby names are read on same value as scrabble words are (ie. all lowercase; all uppercase; etc.) ... for this use case that means all being uppercase
------- check if reversed baby names are equal to any words in scrabble words list
------- add into array for ultimate output all reversed baby names that are valid scrabble words
- console log
- invoke fn  
*/

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

const scrabbleWordsDict = {};
for (let word of scrabbleWordsArr) {
  scrabbleWordsDict[word] = "";
}

// simple test case to get reverse working
// const stringEx = "Example";
// console.log(stringEx.split("").reverse().join("").toUpperCase());

// array
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
    "ARRAY METHOD TO NAMES THAT ARE VALID SCRABBLE WORDS WHEN READ BACKWARDS: ",
    namesValidScrabbleWordsArray
  );
  console.log(
    "REVERSE READ OF NAMES THAT ARE VALID SCRABBLE WORDS WHEN READ BACKWARDS: ",
    namesValidScrabbleWordsArrayReversed
  );
};
var start = new Date().getTime();
showNamesValidScrabbleWordsArray();
var end = new Date().getTime();
console.log(end - start);

// dictionary
let namesValidScrabbleWordsDictionary = [];
let namesReverseReadDictionary = [];

const showNamesValidScrabbleWordsDictionary = () => {
  for (let name of namesArr) {
    // namesArr[name] = name;
    for (let word in scrabbleWordsDict) {
      if (name.split("").reverse().join("").toUpperCase() === word) {
        // namesValidScrabbleWordsDictionary[namesArr[name]]++;
        // namesReverseReadDictionary[
        //   name.split("").reverse().join("").toUpperCase()
        // ]++;

        namesValidScrabbleWordsDictionary.push(name);
        namesReverseReadDictionary.push(
          name.split("").reverse().join("").toUpperCase()
        );
      }
    }
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
var start = new Date().getTime();
showNamesValidScrabbleWordsDictionary();
var end = new Date().getTime();
console.log(end - start);

// AREAS TO ADDRESS 1) remove NaN from dictionary outputs, 3) add timers
