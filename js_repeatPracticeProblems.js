/* 
QUESTION 1 OF 5
[😊] What are all of the words that have all 5 vowels, in any order? 
*/
/*
[x] arrange file system to read and access data aka each word in provided text edit file
[x] create variable assigned value of empty array to store words that meet criteria
[x] for loop through each word in array created by file system
[x] create variable assigned value of each word during iteration through words array
[x] set inclusion criteria that each word must have all 5 vowels (no letter y)
[x] store words that meet criteria
[x] console log
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordsAsStrings.split("\n");

const aeiouNotYVowelsInAnyOrderWords = [];

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    aeiouNotYVowelsInAnyOrderWords.push(word);
  }
}
console.log({ aeiouNotYVowelsInAnyOrderWords });

/* 
QUESTION 2 OF 5
[😊] Create and print an array containing all of the words that end in "GHTLY" 
*/
/*
[x] arrange file system to read and access data aka each word in provided text edit file (use same fs)
[x] create variable assigned value of empty array to store words that meet criteria
[x] for loop through each word in array created by file system
[x] create variable assigned value of each word during iteration through words array
[x] set inclusion criteria that each word must end with ghtly
[x] store words that meet criteria
[x] console log
*/

// const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsArray = wordStrings.split("\n");

const wordsEndInGHTLY = [];

for (let i = 0; i < wordsArray.length; i++) {
  const words = wordsArray[i];
  if (words.endsWith("GHTLY")) {
    wordsEndInGHTLY.push(words);
  }
}
console.log({ wordsEndInGHTLY });

/*
QUESTION 3 OF 5
[😊] What are all of the words that can only be made from the letters “S”, “T”, "E",“L”, “R”, and “N”?
*/
/*
[x] arrange file system to read and access data aka each word in provided text edit file (use same fs)
[x] create variable assigned value of empty array to store words that meet criteria
[x] for loop through each word in array created by file system
[x] create variable assigned value of each word during iteration through words array
[x] inner for loop through each letter of each word
[x] create variable assigned value of each letter during iteration through each word
[x] set exclusion criteria to skip words that have letters other than those needed
[x] ensure iterate length of each word
[x] store each word that meets criteria
[x] console log
*/

// const fs = require("fs");
const stringsOfWords = fs.readFileSync("sowpods.txt").toString("utf-8");
const arrayOfWords = stringsOfWords.split("\n");

const stelrnLettersOnlyWords = [];

for (let i = 0; i < arrayOfWords.length; i++) {
  const words = arrayOfWords[i];
  for (let j = 0; j < words.length; j++) {
    const letters = words[j];
    if (
      letters !== "S" &&
      letters !== "T" &&
      letters !== "E" &&
      letters !== "L" &&
      letters !== "R" &&
      letters !== "N"
    ) {
      break;
    } else {
      if (j === words.length - 1) {
        stelrnLettersOnlyWords.push(words);
      }
    }
  }
}
console.log({ stelrnLettersOnlyWords });

/* 
QUESTION 4 OF 5
[😊] What are all of the words that have all 5 vowels, in alphabetical order? 
*/
/*
[x] arrange file system to read and access data aka each word in provided text edit file (use same fs)
[x] create variable assigned value of empty array to store words that meet criteria
[x] for loop through each word in array created by file system
[x] create variable assigned value of each word during iteration through words array
[x] set inclusion criteria that each word must have all 5 vowels (not letter y)
[x] set inner inclusion criteria that each vowel must be in alpha order
[x] store words that meet criteria
[x] console log
*/

// const fs = require("fs");
const wordsStringified = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsArrayified = wordsStringified.split("\n");

const alphaOrderVowelsOnlyWords = [];

for (let i = 0; i < wordsArrayified.length; i++) {
  const word = wordsArrayified[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      word.indexOf("A") < word.indexOf("E") &&
      word.indexOf("E") < word.indexOf("I") &&
      word.indexOf("I") < word.indexOf("O") &&
      word.indexOf("O") < word.indexOf("U")
    ) {
      alphaOrderVowelsOnlyWords.push(word);
    }
  }
}
console.log({ alphaOrderVowelsOnlyWords });

/* 
QUESTION 5 OF 5
[😊] How many words contain the substring "TYPE”? 
*/
/*
[x] arrange file system to read and access data aka each word in provided text edit file (use same fs)
[x] create counter variable assigned zero to increment with words that meet criteria
[x] extra ... create variable assigned value of empty array to store words that meet criteria
[x] for loop through each word in array created by file system
[x] extra ... create variable assigned value of each word during iteration through words array
[x] set inclusion criteria
[x] increment counter by one for each word that meets criteria
[x] extra ... store each word that meets criteria
[x] console log final count
[x] console log words that meet criteria
*/

// const fs = require("fs");
const strForWords = fs.readFileSync("sowpods.txt").toString("utf-8");
const arrForWords = strForWords.split("\n");

let countOfTypes = 0;
const allTypesArr = [];

for (let i = 0; i < arrForWords.length; i++) {
  const word = arrForWords[i];
  if (word.includes("TYPE")) {
    countOfTypes++;
    allTypesArr.push(word);
  }
}
console.log({ countOfTypes });
console.log({ allTypesArr });

/*
BONUS
[😊] Count and list all words created only using letters "A", "C", "I", "T", "R", "E", "M"
[😊] THEN print the longest word
[😊] THEN print the shortest word
*/

/*
[x] create file system reusing fs variable to access and read data in provided text edit file
[x] create variable assigned array containing only letters words can have
[x] create variable assigned value of array containing words that meet criteria

[x] for loop through array of words created by file system
[x] assign variable to store each word iterated
[x] inner for loop to iterate each letter of each word
[x] assign variable to store each letter iterated
[x] set exclusion criteria to skip words that contain non-specified letters
[x] ensure iterated length of each word
[x] store words that meet criteria

[x] create variable assigned value of first word in array as longest
[x] reassign value of longestWord to be word iterated if length of iterated word is greater than default

[x] create variable assigned value of first word in array as shortest
[x] reassign value of shortestWord to be word iterated if length of iterated word is less than default  

[x] console log array of words that meet criteria
[x] console log longest word and its
[x] console log shortest word and its length
*/

// const fs = require("fs");
const theWordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const theWordArray = theWordStrings.split("\n");

const lettersOnlyEachWordCanHave = ["A", "C", "I", "T", "R", "E", "M"];
const acitremLettersOnlyWords = [];
let longestWordUsingOnlyLettersACITREM = theWordArray[0];
let shortestWordUsingOnlyLettersACITREM = theWordArray[0];

for (let i = 0; i < theWordArray.length; i++) {
  const word = theWordArray[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (!lettersOnlyEachWordCanHave.includes(letter)) {
      break;
    }
    if (j === word.length - 1) {
      acitremLettersOnlyWords.push(word);
      if (longestWordUsingOnlyLettersACITREM.length < word.length) {
        longestWordUsingOnlyLettersACITREM = word;
      }
      if (shortestWordUsingOnlyLettersACITREM > word.length) {
        shortestWordUsingOnlyLettersACITREM = word;
      }
    }
  }
}
console.log({ acitremLettersOnlyWords });
console.log(
  { longestWordUsingOnlyLettersACITREM },
  longestWordUsingOnlyLettersACITREM.length + " LETTERS LONG"
);
console.log(
  { shortestWordUsingOnlyLettersACITREM },
  shortestWordUsingOnlyLettersACITREM.length + " LETTERS SHORT"
);
