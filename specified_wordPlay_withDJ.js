/*
Longest Palindrome
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8").trim();
const wordArray = wordsAsStrings.split("\n");

function longestPalindrome(arr) {
  let longest = "";

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const reversedWord = word.split("").reverse().join("");

    if (word === reversedWord && word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log("LONGEST: ", longestPalindrome(wordArray));

/*
Shortest Palindrome
*/

function shortestPalindrome(arr) {
  let shortest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const reversed = word.split("").reverse().join("");

    if (word === reversed && word.length < shortest.length) {
      shortest = word;
    }
  }
  return shortest;
}
console.log("SHORTEST: ", shortestPalindrome(wordArray));
