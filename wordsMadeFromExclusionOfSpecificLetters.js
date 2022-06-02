/*
[x] What are all of the words that can be made without the letters in “AEIOSHRTN”?

(not all of the letters need to be used, and letters can repeat)

- arrange file system
- variable to store output
- assign array of excluded letters to variable
- outer for loop each word
- inner for loop each letter of each word
- check if letter is in excluded letters list
- break loop when letter is in the excluded letter list
- otherwise check if whole word has been checked
- when whole word has been checked store word 
- console log
*/

const fs = require("fs");
const { ucs2 } = require("punycode");
const wordStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArr = wordStr.split("\n");

const wordsNotIncludingExcludedLetters = [];
const excludedLetters = ["A", "E", "I", "O", "S", "H", "R", "T", "N"];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];

    if (excludedLetters.includes(letter)) {
      break;
    } else if (j === word.length - 1) {
      wordsNotIncludingExcludedLetters.push(word);
    }
  }
}
console.log({ wordsNotIncludingExcludedLetters });

const getWordsNotIncludingExcludedLetters = () => {
  const wordsNotIncludingExcludedLetters = [];
  const excludedLetters = ["A", "E", "I", "O", "S", "H", "R", "T", "N"];

  for (let i = 0; i < wordArr.length; i++) {
    const word = wordArr[i];
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];

      if (excludedLetters.includes(letter)) {
        break;
      } else if (j === word.length - 1) {
        wordsNotIncludingExcludedLetters.push(word);
      }
    }
  }
  return wordsNotIncludingExcludedLetters;
};
console.log(getWordsNotIncludingExcludedLetters());

/* 
BONUS: Write a program that counts distribution of the vowels
*/
const vowels = ["A", "E", "I", "O", "U"];
const vowelDistributionsObj = {};

for (const word of wordArr) {
  for (const letter of word) {
    if (!vowels.includes(letter)) {
      break;
    } else if (vowelDistributionsObj[letter] === undefined) {
      vowelDistributionsObj[letter] = 1;
    } else {
      vowelDistributionsObj[letter]++;
    }
  }
}
console.log(vowelDistributionsObj);
