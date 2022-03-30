/* 
QUESTION
[ ] What is the longest palindrome? 
*/

/*
[x] arrange file system to access and read data provided in text edit file
[x] declare longest palindrome w/o assignment
[x] for loop through words array created by file system
[x] declare word variable
[x] inside the for loop under word variable declaration, declare variable that reverses each word
[x] compare reversed word with each word in array
[x] check if palindrome variable is undefined and if yes THEN
[x] re-assign longest palindrome variable to value of reversed word
[x] compare length of current value of longest palindrome to subsequent reversed words
[x] re-assign longest palindrome to reversed words longer than it is
[x] console log
*/

const fs = require("fs");
const strings = fs.readFileSync("sowpods.txt").toString("utf-8");
const array = strings.split("\n");

let palindromeLongest;

for (let i = 0; i < array.length; i++) {
  const word = array[i];
  let wordReversed = word.split().reverse().join();
  if (word === wordReversed) {
    if (!palindromeLongest) {
      // result is same when wordReversed is word because they are the same word at this point
      palindromeLongest = wordReversed;
    }
    // result is same when wordReversed is word ...
    if (palindromeLongest.length < wordReversed.length) {
      // result is same when wordReversed is word ...
      palindromeLongest = wordReversed;
    }
  }
}
console.log({ palindromeLongest });
