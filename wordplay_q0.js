const fs = require("fs");
const wordsStr = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = wordsStr.split("\n");

/*
QUESTION
What are all of the words that have a U and an Z and are less than 5 letters long?
*/

const letter_uandz_lessthan5_words = [];

for (let i = 0; i < wordsByLine.length; i++) {
  let word = wordsByLine[i];
  if (word.includes("U") && word.includes("Z") && word.length < 5) {
    letter_uandz_lessthan5_words.push(word);
  }
}
// console.log({ letter_uandz_lessthan5_words });

/*
QUESTION
What are all of the words that both start with a “TH” and end with a “TH”?
*/
const startandend_th_words = [];

for (let i = 0; i < wordsByLine.length; i++) {
  let word = wordsByLine[i];
  if (word.startsWith("TH") && word.endsWith("TH")) {
    startandend_th_words.push(word);
  }
}
// console.log({ startandend_th_words });

/*
QUESTION
What are all of the words that have a “U” but no other vowel?
*/
const uAndNoOtherVowelsWords = [];
const noWantVowels = ["A", "E", "I", "O"];

for (let i = 0; i < wordsByLine.length; i++) {
  let word = wordsByLine[i];
  if (
    word.includes("U") &&
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O")
  ) {
    uAndNoOtherVowelsWords.push(word);
  }
}
// console.log({ uAndNoOtherVowelsWords });

/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/
const specifiedLettersOnlyWords = [];

for (let i = 0; i < wordsByLine.length; i++) {
  let word = wordsByLine[i];
  for (let j = 0; j < word.length; j++) {
    if (
      !(word[j] === "R") &&
      !(word[j] === "S") &&
      !(word[j] === "T") &&
      !(word[j] === "L") &&
      !(word[j] === "N") &&
      !(word[j] === "E")
    ) {
      break;
    } else {
      if (j === word.length - 1) {
        specifiedLettersOnlyWords.push(word);
      }
    }
  }
  //
  //   specifiedLettersOnlyWords.push(word);
}
console.log({ specifiedLettersOnlyWords });

/*
QUESTION
What are all of the words that can only be made from the letters “R”, “S”, “T”, “L”, “N”, and “E”?
*/

/* 
QUESTION
[ ] What are all of the words containing UU? 
*/

/* 
QUESTION
[ ] What are all of the words containing an X and a Y and a Z? 
*/

/* 
QUESTION
[ ] What are all of the words containing a Q but not a U? 
*/

/* 
QUESTION
[ ] What are all of the words that contain the word CAT and are exactly 5 letters long? 
*/

/* 
QUESTION
[ ] What are all of the words that have no E or A and are at least 15 letters long? 
*/

/* 
QUESTION
[ ] What are all of the words that have a B and an X and are less than 5 letters long? 
*/

/* 
QUESTION
[ ] What are all of the words that start and end with a Y? 
*/

/* 
QUESTION
[ ] What are all of the words with no vowel and not even a Y? 
*/

/* 
QUESTION
[ ] What are all of the words that have all 5 vowels, in any order? 
*/

/* 
QUESTION
[ ] What are all of the words that have all 5 vowels, in alphabetical order? 
*/

/* 
QUESTION
[ ] How many words contain the substring "TYPE”? 
*/

/* 
QUESTION
[ ] Create and print an array containing all of the words that end in "GHTLY" 
*/

/* 
QUESTION
[ ] What is the shortest word that contains all 5 vowels? 
*/

/* 
QUESTION
[ ] What is the longest word that contains no vowels?
*/

/* 
QUESTION
[ ] Which of the letters Q, X, and Z is the least common? 
*/

/* 
QUESTION
[ ] What is the longest palindrome? 
*/

/* 
QUESTION
[ ] What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively? 
*/
