/* 
PSEUDOCODE
 this is the dictionary aka object implementation in fn of baby names that are valid scrabble words when spelled backwards

 [x] arrange file system to access and read data from provided sources
 [x] declare variable for empty dict to store names that meet criteria
 [x] iterate word array to access each word
 [x] through array "of" loop set key(s) of dict to each word with a value of an empty string
 [x] declare variable to store names
 [x] declare variable to store same names but spelled backwards
 [x] arrow fn
 [x] file system to access and read names
 [x] another array "of" loop to grab names from names array
 [x] reversing the name with needed methods while also checking if the reversed name is in the dict
 [x] push the names that meet criteria
 [x] push the names that meet criteria spelled backwards
 [x] return statement to access output outside the fn
    **this return statement is fancy for clarity in output

 [x] start tracking how long it takes to run this program
 [x] console log to print output
 [x] stop tracking how long it takes to run this orogram
 [x] console log the difference between the start and end times to get how long the program takes to run */

const fs = require("fs");
const wordStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArr = wordStr.split("\n");
const nameStr = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const nameArr = nameStr.split("\n");

const dict = {};
for (const word of wordArr) {
  dict[word] = "";
}

const namesForward = [];
const namesBackward = [];

const findNamesThatWhenSpelledBackwardsAreValidScrabbleWords = () => {
  for (const name of nameArr) {
    if (name.split("").reverse().join("") in dict) {
      namesForward.push(name);
      namesBackward.push(name.split("").reverse().join(""));
    }
  }
  return (
    "\nNAMES FORWARD: " + namesForward + "\nNAMES BACKWARD: " + namesBackward
  );
};

const startRunTime = performance.now();
console.log(findNamesThatWhenSpelledBackwardsAreValidScrabbleWords(), "\n");
const stopRunTime = performance.now();
console.log("RUN TIME: " + (stopRunTime - startRunTime));

// THAT'S ALL FOLKS!
