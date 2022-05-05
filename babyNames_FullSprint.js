/*
More for loops, if conditions, and storage
[x] What is the shortest baby name in the top 40 baby names for 2020?
[x] What are the longest baby names in the top 40 baby names for 2020? 
 ** use a solution that can handle ties

THAT CONCLUDES PART 1🥸

Nested for loops
[x] Find baby names in 2020 that when spelled backwards are valid scrabble words.
    [x] Solve this two ways: 
        [x] with an array to hold the Scrabble words
        [x] with a dictionary/set to hold the Scrabble words
        ** use timer functions to measure implementation times for each ... Date() and Performance() 
        ** explain reasons implementation times differ between them ... dict method is super fast because the program goes in and directly grabs what it needs while in array the program must iterate through all data before can get what it needs

[x] What are all of the names that were top 40 baby names in both 1880 and 2020?

THAT CONCLUDES PART 2🥸
*/

/*
NOTE:
- use same file system for questions
- names are sentence case, so should standardize them to all upper or lower for consistency
*/
// no need to re-declare fs
// but will arrange rest of file system for sowpods in this doc
// can only declare fs once which is reason declared it below then commented it out
// now setting new variables for the strings and array
const fs = require("fs");
const babyNameStrings = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toLowerCase()
  .trim();
const babyNamesArray = babyNameStrings.split("\n");

let shortest2020BabyName;
const babyNamesSameLengthAsShortestBabyNameIn2020 = [];

for (let i = 0; i < babyNamesArray.length; i++) {
  const shortest2020Name = babyNamesArray[i];

  if (
    !shortest2020BabyName ||
    shortest2020Name.length < shortest2020BabyName.length
  ) {
    shortest2020BabyName = shortest2020Name;
  }

  if (shortest2020Name.length === 3) {
    babyNamesSameLengthAsShortestBabyNameIn2020.push(shortest2020Name);
    console.log("\nNo other names have same length as shortest!");
  }
}
console.log({ shortest2020BabyName });
console.log({ babyNamesSameLengthAsShortestBabyNameIn2020 });

let longest2020BabyNames;
const babyNamesOf2020EqualLengthOfLongest = [];

for (let i = 0; i < babyNamesArray.length; i++) {
  const longest2020Name = babyNamesArray[i];

  if (
    !longest2020BabyNames ||
    longest2020Name.length > longest2020BabyNames.length
  ) {
    longest2020BabyNames = longest2020Name;
  }
}

for (let j = 0; j < babyNamesArray.length; j++) {
  if (babyNamesArray[j].length === longest2020BabyNames.length) {
    babyNamesOf2020EqualLengthOfLongest.push(babyNamesArray[j]);
  }
}

console.log({ longest2020BabyNames }, " LENGTH: ", longest2020BabyNames.length);
console.log({ babyNamesOf2020EqualLengthOfLongest });

// need to compare scrabble words to list of baby names
// sowpods text edit file contains scrabble words to use for comparison
// account for case discrepancy between scrabble words and baby names
const scrabbleWordsAsStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toLowerCase()
  .trim();
const scrabbleWordsArray = scrabbleWordsAsStrings.split("\n");

// const fs = require("fs"); ... fs already declared above
// names are sentence case and words are caps
// names have empty string at end of list
const stringsOfNames = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const arrayOfNames = stringsOfNames.split("\n");
// need file system for words to compare names to
// to upper case not needed here but added as double check of consistency
// added trim just in case and after checking there is an empty string at the end of the words too
const wordStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArray = wordStrings.split("\n");

// array method
// add arrow function formatting
// add (old school) timer to function to track how long takes to run code
const validScrabbleWordsArr = [];
const namesAsValidScrabbleWordsWhenSeenBackwards = [];

const getNameThatsValidScrabbleWordsWhenSpelledBackwards = () => {
  for (const name of arrayOfNames) {
    for (const word of wordArray) {
      if (name.split("").reverse().join("").toUpperCase() === word) {
        namesAsValidScrabbleWordsWhenSeenBackwards.push(name);
        validScrabbleWordsArr.push(word);
      }
    }
  }
  console.log("\n");
  console.log({ namesAsValidScrabbleWordsWhenSeenBackwards });
  console.log({ validScrabbleWordsArr });
};
var startArr = new Date().getTime();
getNameThatsValidScrabbleWordsWhenSpelledBackwards();
var endArr = new Date().getTime();
console.log("ARRAY RUN TIME: " + parseInt(endArr - startArr) + " ms");

// dictionary method
const wordDict = {};
for (const word of wordArray) {
  wordDict[word] = "";
}

const validNamesWordDict = [];
const namesReverseReadDict = [];

// add function formatting
// add (old school) timer to function to track how long takes to run code
const getValidWordsInScrabbleFromNamesSpelledBackwards = () => {
  for (const name of arrayOfNames) {
    if (name.split("").reverse().join("").toUpperCase() in wordDict) {
      validNamesWordDict.push(name);
      namesReverseReadDict.push(
        name.split("").reverse().join("").toUpperCase()
      );
    }
  }
  console.log("\n");
  console.log({ namesReverseReadDict });
  console.log({ validNamesWordDict });
};
let startDict = new Date().getTime();
getValidWordsInScrabbleFromNamesSpelledBackwards();
let endDict = new Date().getTime();
console.log("DICT RUN TIME: " + parseInt(endDict - startDict) + " ms");
console.log("\n");

// apologies for computer lag

// const fs = require("fs");
// file system to compare baby names from both years
const babyNames2020Strings = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const babyNames2020Array = babyNames2020Strings.split("\n");

const babyNames1880Strings = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const babyNames1880Array = babyNames1880Strings.split("\n");

// basic arrow function format
const namesThatMatchInBothYears = () => {
  const namesInBothYears = [];

  for (const names1880 of babyNames1880Array) {
    for (const names2020 of babyNames2020Array) {
      if (names1880 === names2020) {
        namesInBothYears.push(names2020);
      }
    }
  }
  console.log({ namesInBothYears });
};
namesThatMatchInBothYears();

// the names are the same so can push names for either year
// uppercase just looks better than lowercase
