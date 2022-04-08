/*
Write a function that retuns how many words contain the substring "TYPE”?
*/

/*
- file system

- function
- input of array
- output is a number

- counter to track number of words that meet criteria
- check array of data for words that contain type ... for loop/if
- increment counter for each word that meets criteria
- return output

- console log
*/

/*
TRACING

count = 0
i = index 0
word = word at index 0
count = 0

count = 0
i = index 1
word = word at index 2
count = 1
*/

// store each word with type in an array
// then get count from that array

const fs = require("fs");
const sowpodsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const arrayOfSowpodsWords = sowpodsStrings.split("\n");

function getTypeSubstringCount(input) {
  const typeCount = [];

  input.forEach((word) => {
    if (word.includes("TYPE")) {
      typeCount.push(word);
    }
  });

  return typeCount.length;
}
console.log(getTypeSubstringCount(arrayOfSowpodsWords));
