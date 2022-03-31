/*
QUESTIONS

[] shortest palindrome
[] longest palindrome
[] palindromes of equal length of 7 or more letters
*/

const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

let longestPalindrome;

for (let i = 0; i < wordsInArray.length; i++) {
  const word = wordsInArray[i];
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    if (!longestPalindrome) {
      longestPalindrome = word;
    }
    if (word.length > longestPalindrome.length) {
      longestPalindrome = word;
    }
  }
}
console.log({ longestPalindrome });

// const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsArray = wordStrings.split("\n");

let shortestPalindrome;

for (let i = 0; i < wordsArray.length; i++) {
  const word = wordsArray[i];
  const reversedWord = word.split().reverse().join();

  if (!shortestPalindrome) {
    if (reversedWord === word) {
      shortestPalindrome = word;
    }
    if (word.length < shortestPalindrome.length) {
      shortestPalindrome = word;
    }
  }
}
console.log({ shortestPalindrome });

// const fs = require("fs");
const string = fs.readFileSync("sowpods.txt").toString("utf-8");
const array = string.split("\n");

const palindromesEqualLength = [];
let longPalindromes;

for (let i = 0; i < array.length; i++) {
  const word = array[i];
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    if (!longPalindromes) {
      longPalindromes = word;
    }
    if (word.length > longPalindromes.length) {
      longPalindromes = word;
    }
  }

  if (reversedWord === word && reversedWord.length > 7) {
    console.log(
      `\nOne word ${longPalindromes} is a palindrome of more than 8 letters`
    );
  }
  if (reversedWord === word && reversedWord.length === 7) {
    palindromesEqualLength.push(word);
  }
}

console.log("\n");
console.log({ longPalindromes }, longPalindromes.length + " LETTERS LONG");
console.log(
  { palindromesEqualLength },
  palindromesEqualLength[0].length + " LETTERS LONG"
);
console.log(
  `${palindromesEqualLength.length} Palindromes are each 7 letters long`
);
console.log("\n");
