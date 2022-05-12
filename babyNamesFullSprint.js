/*
More for loops, if conditions, and storage
[x] What is the shortest baby name in the top 40 baby names for 2020?
[x] What are the longest baby names in the top 40 baby names for 2020? 
 ** use a solution that can handle ties
 */
const fs = require("fs");
const babyNames2020Strings = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const babyNames2020Array = babyNames2020Strings.split("\n");

function getShortestBabyName2020() {
  let shortestBabyName2020;
  let equalLengthShortBabyNamesOf2020 = [];
  for (let i = 0; i < babyNames2020Array.length; i++) {
    const name = babyNames2020Array[i];

    if (!shortestBabyName2020 || name.length < shortestBabyName2020.length) {
      shortestBabyName2020 = name;
      equalLengthShortBabyNamesOf2020 = [name];
    } else if (name.length === shortestBabyName2020.length) {
      equalLengthShortBabyNamesOf2020.push(name);
    }
  }
  // returning the value to output
  // in this case the shortest baby name
  // allows us to console the fn to get proper output
  return shortestBabyName2020, equalLengthShortBabyNamesOf2020;
}
getShortestBabyName2020();
console.log("\nSHORTEST BABY NAME OF 2020: ", getShortestBabyName2020(), "\n");

function getLongestBabyName2020() {
  let longestBabyName2020;
  let equalLengthLongBabyNamesOf2020;
  for (const name of babyNames2020Array) {
    if (!longestBabyName2020 || name.length > longestBabyName2020.length) {
      longestBabyName2020 = name;
      equalLengthLongBabyNamesOf2020 = [name];
    } else if (name.length === longestBabyName2020.length) {
      equalLengthLongBabyNamesOf2020.push(name);
    }
  }
  return longestBabyName2020, equalLengthLongBabyNamesOf2020;
}
getLongestBabyName2020();
console.log("\nLONGEST BABY NAMES OF 2020: ", getLongestBabyName2020(), "\n");

/*
Nested for loops
[x] Find baby names in 2020 that when spelled backwards are valid scrabble words.
    [🤠] Solve this two ways: 
        [x] with an array to hold the Scrabble words
        [x] with a dictionary/set to hold the Scrabble words
        ** use timer functions to measure implementation times for each ... Date() and Performance() 
        ** explain reasons implementation times differ between them ... dict method is super fast because the program goes in and directly grabs what it needs while in array the program must iterate through all data before can get what it needs

[x] What are all of the names that were top 40 baby names in both 1880 and 2020?

NOTES:
- must use fs variable for all read/access to data sources
- for simplicity also using the same strings and array variables declared at top of file for all challenges
- must declare string and array variables for scrabble words, these variables are below

- for last challenge must setup file system for baby names in 1880 to be able to read and compare baby names between both years
*/
const scrabbleWordsStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const scrabbleWordsArray = scrabbleWordsStrings.split("\n");

// array implementation in a function
function getNamesThatAreValidScrabbleWordsWhenSpelledBackwards() {
  const namesThatAreValidScrabbleWordsWhenSpelledBackwards = [];
  const namesThatAreValidScrabbleWordsWhenSpelledBackwardsAndSpelledBackwardsHere =
    [];
  for (let i = 0; i < babyNames2020Array.length; i++) {
    const name = babyNames2020Array[i];
    const nameInReverse = name.split("").reverse().join("");
    for (let j = 0; j < scrabbleWordsArray.length; j++) {
      const word = scrabbleWordsArray[j];
      if (nameInReverse === word) {
        namesThatAreValidScrabbleWordsWhenSpelledBackwards.push(name);
        namesThatAreValidScrabbleWordsWhenSpelledBackwardsAndSpelledBackwardsHere.push(
          nameInReverse
        );
      }
    }
  }
  return (
    "NAMES VIA ARRAY: " +
    namesThatAreValidScrabbleWordsWhenSpelledBackwards +
    "\nNAMES BACKWARDS VIA ARRAY: " +
    namesThatAreValidScrabbleWordsWhenSpelledBackwardsAndSpelledBackwardsHere
  );
}
const startArrayRun = performance.now();
console.log(getNamesThatAreValidScrabbleWordsWhenSpelledBackwards());
const endArrayRun = performance.now();
console.log(endArrayRun - startArrayRun + " MS ARRAY RUN TIME\n");

// dict aka object implementation in fn
// declare variable for empty dict to store names that meet criteria
const scrabbleWordsDict = {};
// iterate word array to access each word
for (const word of scrabbleWordsArray) {
  // through array of loop set key(s) of dict to each word with a value of an empty string
  scrabbleWordsDict[word] = "";
}

// declare variable to store names
const namesThatAreValidScrabbleWordsWhenSpelledBackwardsDict = [];
// declare variable to store same names but spelled backwards
const namesThatAreValidScrabbleWordsWhenSpelledBackwardsReadInReverseDict = [];

// arrow fn
const findNamesThatAreValidScrabbleWordsWhenSpelledBackwards = () => {
  // another array of loop to grab names from names array
  for (const name of babyNames2020Array) {
    // reversing the name with needed methods while also checking if the reversed name is in the dict
    if (name.split("").reverse().join("").toUpperCase() in scrabbleWordsDict) {
      // push the names that meet criteria
      namesThatAreValidScrabbleWordsWhenSpelledBackwardsDict.push(name);
      // push the names that meet criteria spelled backwards
      namesThatAreValidScrabbleWordsWhenSpelledBackwardsReadInReverseDict.push(
        name.split("").reverse().join("").toUpperCase()
      );
    }
  }
  // return statement to access output outside the fn
  // this return statement is fancy for clarity in output
  return (
    "NAMES VIA DICT: " +
    namesThatAreValidScrabbleWordsWhenSpelledBackwardsDict +
    "\nNAMES BACKWARDS VIA DICT: " +
    namesThatAreValidScrabbleWordsWhenSpelledBackwardsReadInReverseDict
  );
};
// start tracking how long it takes to run this program
const startDictRun = performance.now();
// console log to print output
console.log(findNamesThatAreValidScrabbleWordsWhenSpelledBackwards());
// stop tracking how long it takes to run this orogram
const endDictRun = performance.now();
// console log the difference between the start and end times to get how long the program takes to run
console.log(endDictRun - startDictRun + " MS DICT RUN TIME\n");

// file system for baby names of 1880
const babyNames1880Strings = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const babyNames1880Array = babyNames1880Strings.split("\n");

function getNamesThatAppearInBothYears() {
  const namesThatMatchInBothYears = [];
  for (const name2020 of babyNames2020Array) {
    for (const name1880 of babyNames1880Array) {
      if (name2020 === name1880) {
        namesThatMatchInBothYears.push(name2020);
      }
    }
  }
  return namesThatMatchInBothYears;
}
getNamesThatAppearInBothYears();
console.log(getNamesThatAppearInBothYears());
