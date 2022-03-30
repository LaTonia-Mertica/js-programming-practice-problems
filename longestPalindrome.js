/* 
QUESTION
[ ] What is the longest palindrome? 
*/

/*
[x] arrange file system to access and read data provided in text edit file
[x] declare unassigned variable for longest palindrome
[x] for loop through array of words created by file system
[x] declare word variable
[x] declare word reversed variable
[x] check if longest palindrome variable undefined
[x] compare word to reversed word
[x] if word and reversed word are the same THEN re-assign longest palindrome to either word or reversed word (they have the same value so it doesn't matter)
[x] compare length of longest palindrome to whichever assignment did in previous step
[x] when length of palindrome is less than that checking against THEN re-assign longest palindrome to that value
[x] console log
*/

const fs = require("fs");
const stringsForWords = fs.readFileSync("sowpods.txt").toString("utf-8");
const arrayForWords = stringsForWords.split("\n");

let longestPalindromeInList;

for (let i = 0; i < arrayForWords.length; i++) {
  const word = arrayForWords[i];
  const reversedWord = word.split().reverse().join();

  if (word === reversedWord) {
    if (!longestPalindromeInList) {
      longestPalindromeInList = word;
    }
    if (word.length > longestPalindromeInList.length) {
      longestPalindromeInList = word;
    }
  }
}

console.log({ longestPalindromeInList });

// looks like shortest
