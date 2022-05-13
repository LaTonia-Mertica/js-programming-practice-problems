/*
More for loops, if conditions, and storage
[x] What is the shortest baby name in the top 40 baby names for 2020?
[x] What are the longest baby names in the top 40 baby names for 2020? 
   ** use a solution that can handle ties [🥸]
 */

/*
Nested for loops
[x] Find baby names in 2020 that when spelled backwards are valid scrabble words.
    [🤠] Solve this two ways: 
        [x] with an array to hold the Scrabble words
        [x] with a dictionary/set to hold the Scrabble words
        ** use timer functions to measure implementation times for each ... Date() and Performance() [🥸]

        ** explain reasons implementation times differ between them ... dict method is super fast because the program goes in and directly grabs what it needs while in array the program must iterate through all data before can get what it needs

[x] What are all of the names that were top 40 baby names in both 1880 and 2020?
*/

const fs = require("fs");

const wordStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArray = wordStrings.split("\n");

const names1880Strings = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const names1880Array = names1880Strings.split("\n");

const names2020Strings = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const names2020Array = names2020Strings.split("\n");

function getShortest2020BabyName() {
  let shortest2020BabyName;
  let allShortest2020BabyNames = [];
  for (const name of names2020Array) {
    if (!shortest2020BabyName || name.length < shortest2020BabyName.length) {
      shortest2020BabyName = name;
      allShortest2020BabyNames = [name];
    } else if (name.length === shortest2020BabyName.length) {
      allShortest2020BabyNames.push(name);
    }
  }
  //   if (allShortest2020BabyNames.length <= 1) {
  //     console.log(
  //       "\nOnly One Shortest Baby Name Exists - No Others Same Length!"
  //     );
  //   }
  return (
    "\nSHORTEST 2020 BABY NAME: '" +
    shortest2020BabyName +
    "' HAS LENGTH OF " +
    shortest2020BabyName.length +
    " LETTERS AND IS THE ONLY SHORTEST BABY NAME FOR THE YEAR - NO TIES!"
  );
}
// console.log({ shortest2020BabyName });
// console.log({ allShortest2020BabyNames });
console.log(getShortest2020BabyName(), "\n");

const getLongest2020BabyName = () => {
  let longest2020BabyName;
  let allLongest2020BabyNames = [];
  for (const name of names2020Array) {
    if (!longest2020BabyName || name.length > longest2020BabyName.length) {
      longest2020BabyName = name;
      allLongest2020BabyNames = [name];
    } else if (name.length === longest2020BabyName.length) {
      allLongest2020BabyNames.push(name);
    }
  }
  if (allLongest2020BabyNames.length <= 1) {
    console.log("\nOnly One Longest Baby Name Exists - No Others Same Length!");
  }
  return (
    "\nLONGEST BABY NAMES: " +
    allLongest2020BabyNames +
    " EACH AT " +
    longest2020BabyName.length +
    " LETTERS EACH - TIES HANDLED!"
  );
};
// console.log({ longest2020BabyName });
// console.log({ allLongest2020BabyNames });
console.log(getLongest2020BabyName(), "\n");

// array method
function getNamesThatAreScrabbleWordsInReverseUsingArray() {
  const namesThatAreScrabbleWordsWhenReversed = [];
  const namesThatAreScrabbleWordsWhenReversedActuallyReversed = [];
  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i];
    for (const name of names2020Array) {
      const nameReversed = name.split("").reverse().join("");
      if (nameReversed === word) {
        namesThatAreScrabbleWordsWhenReversed.push(name);
        namesThatAreScrabbleWordsWhenReversedActuallyReversed.push(
          name.split("").reverse().join("")
        );
      }
    }
  }
  return (
    "\nNAMES THAT ARE VALID SCRABBLE WORDS IN REVERSE USING ARRAY: \n" +
    namesThatAreScrabbleWordsWhenReversed +
    "\nTHOSE SAME NAMES IN REVERSE USING ARRAY: \n" +
    namesThatAreScrabbleWordsWhenReversedActuallyReversed
  );
}
// console.log({ namesThatAreScrabbleWordsWhenReversed });
// console.log({ namesThatAreScrabbleWordsWhenReversedActuallyReversed });
const runArrayTimer = performance.now();
console.log(getNamesThatAreScrabbleWordsInReverseUsingArray());
const stopArrayTimer = performance.now();
console.log(stopArrayTimer - runArrayTimer + " MS FOR ARRAY METHOD TO RUN\n");

// dictionary aka object method
const getNamesThatAreValidScrabbleWordsWhenReversedUsingDict = () => {
  const dictMethodDictionary = {};

  for (const word of wordArray) {
    dictMethodDictionary[word] = "";
  }
  const namesFrontward = [];
  const namesBackward = [];

  for (const name of names2020Array) {
    if (name.split("").reverse().join("") in dictMethodDictionary) {
      namesFrontward.push(name);
      namesBackward.push(name.split("").reverse().join(""));
    }
  }
  return (
    "\nNAMES USING DICT: " +
    namesFrontward +
    "\nNAMES REVERSED USING DICT: " +
    namesBackward
  );
};
// console.log({ namesFrontward });
// console.log({ namesBackward });
const goRunTime = performance.now();
console.log(getNamesThatAreValidScrabbleWordsWhenReversedUsingDict(), "\n");
const noGoRunTime = performance.now();
console.log("DICT RUN TIME: " + (noGoRunTime - goRunTime) + " MS!");

function getNamesThatMatchInBothYears() {
  const namesThatMatchInBothYears = [];
  for (const name1880 of names1880Array) {
    for (const name2020 of names2020Array) {
      if (name1880 === name2020) {
        namesThatMatchInBothYears.push(name1880);
      }
    }
  }
  return namesThatMatchInBothYears;
}
//console.log("\n", { namesThatMatchInBothYears });
console.log(getNamesThatMatchInBothYears());

// THAT'S ALL FOR THIS RUN FOLKS!
// WISHES FOR HAPPY CODE DAYS
