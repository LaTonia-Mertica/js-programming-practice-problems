/* 
PSEUDOCODE

 this is the dictionary aka object implementation in fn

 [xx] arrange file system to access and read data sources

 [xx] declare variable for empty dict to store names that meet criteria

 [xx] iterate word array to access each word

 [xx] through word array created per previous step set key(s) of dict to each word with a value of an empty string

 [xx] declare variable to store names

 [xx] declare variable to store same names but spelled backwards

 [xx] arrow fn

 [xx] another for "of" loop to grab names from names array

 [xx] reversing the name with needed methods while also checking if the reversed name is in the dict

 [xx] push the names that meet criteria

 [xx] push the names that meet criteria spelled backwards

 [xx] return statement to access output outside the fn
     **this return statement may be fancy for clarity in output

 [xx] start tracking how long it takes to run this program

 [xx] console log to print output

 [xx] stop tracking how long it takes to run this orogram

 [xx] console log the difference between the start and end times to get how long the program takes to run */

const fs = require("fs");
const names = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const nameArray = names.split("\n");
const words = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArray = words.split("\n");

const dict = {};

for (const word of wordArray) {
  dict[word] = "";
}

const frontwardNames = [];
const backwardNames = [];

const getNamesBothWays = () => {
  for (const name of nameArray) {
    if (name.split("").reverse().join("") in dict) {
      frontwardNames.push(name);
      backwardNames.push(name.split("").reverse().join(""));
    }
  }
  return "\nNAMES: " + frontwardNames + "\nNAMES BACKWARDS: " + backwardNames;
};
// getNamesBothWays();
// only need to invoke the fn once
// invoking fn in console log is sufficient
const startRun = performance.now();
console.log(getNamesBothWays());
const endRun = performance.now();
console.log("TIME TO RUN: " + (endRun - startRun));

//const fs = require("fs");
const callBys = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const callBysArray = callBys.split("\n");

const dicti = {};

for (const word of wordArray) {
  dicti[word] = "";
}

const callBysStraight = [];
const callBysTwisted = [];

const findCallBysBothWays = () => {
  for (const callBy of callBysArray) {
    if (callBy.split("").reverse().join("") in dicti) {
      callBysStraight.push(callBy);
      callBysTwisted.push(callBy.split("").reverse().join(""));
    }
  }
  return (
    "\nMORE NAMES: " +
    callBysStraight +
    "\nMORE NAMES TWISTED: " +
    callBysTwisted
  );
};
const runStart = performance.now();
console.log(findCallBysBothWays());
const runStop = performance.now();
console.log("RUN TIME: " + (runStop - runStart));

// random names for more practice
//const fs = require("fs");
const randomNames = fs
  .readFileSync("random-name-first-names.rtf")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const randomNamesArray = randomNames.split("\r\\\n");

const randomNamesDict = {};

for (const word of wordArray) {
  randomNamesDict[word] = "";
}

const rNamesF = [];
const rNamesB = [];

const findRandomNamesThatAreValidWordsFlipped = () => {
  for (const rName of randomNamesArray) {
    if (rName.split("").reverse().join("") in randomNamesDict) {
      rNamesF.push(rName);
      rNamesB.push(rName.split("").reverse().join(""));
    }
  }
  return "\nRANDOM NAMES: " + rNamesF + "\n\nRANDOM NAMES FLIPPED: " + rNamesB;
};
const timeTestStart = performance.now();
console.log(findRandomNamesThatAreValidWordsFlipped());
const timeTestStop = performance.now();
console.log("TIME TEST DURATION: " + (timeTestStop - timeTestStart));
