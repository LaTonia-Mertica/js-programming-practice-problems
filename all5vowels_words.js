/* 
QUESTION
[ ] What are all of the words that have all 5 vowels, in any order? 
*/

/*
[x] arrange file system to access/read data provided in text edit file
[x] create variable to store words that meet criteria
// [x] create array to store all sought vowels each word must have
[x] for loop through each word in array created by file system
[x] assign value of each word to variable
// [x] inner for loop through each word reading each letter
// [x] assign value of each letter to a variable
[] set inclusion criteria
// [] ensure iterated length of each word
[] store words that meet criteria
[] console log
*/

const fs = require("fs");
const wordStr = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArr = wordStr.split("\n");

const all5VowelsWords = [];

for (let i = 0; i < wordArr.length; i++) {
  let word = wordArr[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    all5VowelsWords.push(word);
  }
}
console.log({ all5VowelsWords });
