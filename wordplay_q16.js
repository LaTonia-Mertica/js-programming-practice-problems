const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let longest_palindrome;

  for (const words of wordsByLine) {
    const reversedWord = words.split("").reverse().join("");
    if (words === reversedWord) {
      if (!longest_palindrome) {
        longest_palindrome = words;
      }
      if (words.length > longest_palindrome.length) {
        longest_palindrome = words;
      }
    }
  }
  console.log("Longest palindrome is:", longest_palindrome);
};

readlines();
