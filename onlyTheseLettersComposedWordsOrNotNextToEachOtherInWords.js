/*
[x] What words may only be composed of specific letters?
[] What letters never repeat themselves next to itself in English words?
*/

// create file system for use with both given we are using the same data source
// data source is in all caps so must remember to use uppercase or change case - just be consistent
// \n means newline by splitting on \n we get each word on its own line
const fs = require("fs");
const wordsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsArray = wordsStrings.split("\n");

// random letters just to test case on different letters
const specificLetters = ["L", "M", "E", "S", "O"];
// storage for words that meet criteria set
const wordsThatMeetCriteriaSet = [];

// for loop - can use basic or for of ... using basic here
for (let i = 0; i < wordsArray.length; i++) {
  const word = wordsArray[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    // need exclamation mark aka bang at start of include to exclude
    if (!specificLetters.includes(letter)) {
      break;
      // must check reached end of whole word then push it
      // this means we also need storage for words that meet criteria set
      // letter j in the inner for loop is the index only of each letter
      // setting j aka the index to the length of the word minue one gets us both elements at the end of the iteration
    } else if (j === word.length - 1) {
      wordsThatMeetCriteriaSet.push(word);
    }
  }
}
console.log({ wordsThatMeetCriteriaSet });

// control c stops code executing in terminal
// control l clears everything seen in terminal
// up arrow will return terminal to last/most recent command run
// this looks correct
// continue stops execution but doesn't stop the loop
// break stops the current loop executing

// try to keep code tidy
// and avoid cluttery pseudocode like I am doing here
// because we already setup our file system we can re-use it
// but I like to rewrite the last two bits for clarity
// const fs = require("fs");
// exactly the same I just gave the strings and array their own names to distinguish them from the previous exercise
const stringsOfWords = fs.readFileSync("sowpods.txt").toString("utf-8");
const arrayOfWords = wordsStrings.split("\n");

// we'll need to iterate through the strings for this
// set up array of strings to iterate aka loop through
const allWordsAsStrings = [];
// then immediately push the strings into the array
allWordsAsStrings.push(stringsOfWords);
// comparing letters in this context means we need the alphabet
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// need storage for letters that meet criteria
// naming should be more concise and descriptive than this
const lettersThatMeetCriteria = [];

// best to iterate through the alphabet on the outside
// otherwise we create more code work for ourselves

for (let i = 0; i < alphabet.length; i++) {
  // this variable is not needed but cleans the code a bit
  const letter = alphabet[i];
  // now inner loop for the word strings
  for (let j = 0; j < allWordsAsStrings.length; j++) {
    // again not needed variable but helps make code cleaner
    const string = allWordsAsStrings[j];

    if (string.includes(letter + letter)) {
      continue;
    } else {
      lettersThatMeetCriteria.push(letter);
    }
  }
}
// console log is a by-product of code in that it only prints/displays outcomes to the screen
// better is to setup code as function and use a return statement, which then makes the outcomes subject to manipulation et cetera
console.log({ lettersThatMeetCriteria });
