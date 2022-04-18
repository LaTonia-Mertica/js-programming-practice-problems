/*
Setting up storage to use during a for loop, including counters and arrays
		 [] Find shortest word that contains all 5 vowels and compare 
            to shortest word that contains all 5 vowels plus letter y

		 [] Find longest word that contains no vowels and compare to 
            longest word that contains no vowels not even letter y

		 [] Print commonality of the letters Q, X, and Z per their respective count ie. 
            letter is more common than other letter yet less common than other other letter

		 [] Find longest palindrome that contains all vowels and compare to longest palindrome that
            contains no vowels and compare to longest palindrome that contains no vowels not even y

		 [] List letters that never appear consecutively/back-to-back in an English word? 
*/

/*
 [] Get how many words contain the substring "TYPE” without using includes
*/

const fs = require("fs");
const sowpodsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const sowpodsArray = sowpodsStrings.split("\n");

let typeCounter = 0;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];

  if (word.indexOf("TYPE") === -1) {
    continue;
  } else {
    typeCounter++;
  }
}
// console.log({ typeCounter });
// console.log("SOWPODS LENGTH: " + sowpodsArray.length);

let x = 10;
x -= -1;
// console.log({ x });
// double negative produces positive, which is not what want here

// two ways to easily use regex
// const regex = /TYPE/g;
const regex = /^[T].+[E]$/g;
let typeCount = 0;
for (let i = 0; i < sowpodsArray.length; i++) {
  const word = sowpodsArray[i];

  if (word.search(regex) === -1) {
    continue;
  } else {
    typeCount++;
    // console.log({ word });
  }
}
// console.log({ typeCount });

/*
[] Use substring to get words that end in "GHTLY"
*/

function getWordsFromLetters(arr, startLetters, endLetters) {
  const wordsFromLetters = [];

  arr.forEach((word) => {
    const startWord = word.substring(0, startLetters.length);
    const endWord = word.substring(
      word.length - endLetters.length,
      word.length
    );
    if (startWord === startLetters && endWord === endLetters) {
      wordsFromLetters.push(word);
    }
  });
  return wordsFromLetters;
}
// console.log(getWordsFromLetters(sowpodsArray, "BR", "LY"));

// in below use case, function requires a return statement
// for word variable and only needs pertinent arguments
function getWordsFromLetters(arr, startLetters, endLetters) {
  //   const wordsFromLetters =
  return arr.filter((word) => {
    const startWord = word.substring(0, startLetters.length);
    const endWord = word.substring(
      word.length - endLetters.length,
      word.length
    );
    if (startWord === startLetters && endWord === endLetters) {
      return word;
    }
  });
  //   return wordsFromLetters;
}
console.log(getWordsFromLetters(sowpodsArray, "ANT", "OSS"));
