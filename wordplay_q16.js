// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let longest_palindrome;

  // for loop with nested if statements
  for (const words of wordsByLine) {
    // splits reverses and rejoins characters of words
    const reversedWord = words.split("").reverse().join("");
    // checks whether each word evaluates to the same as the reversed word
    if (words === reversedWord) {
      // checks whether no longest palindrome exists
      if (!longest_palindrome) {
        // and when longest palindrome doesn't exist
        // sets its value to that of the value of words
        longest_palindrome = words;
      }
      // checks whether the length of words is greater than
      // that of longest palindrome and when yes assigns
      // longest palindrome the value of words
      if (words.length > longest_palindrome.length) {
        longest_palindrome = words;
      }
    }
  }
  console.log("Longest palindrome is:", longest_palindrome);
};

readlines();
