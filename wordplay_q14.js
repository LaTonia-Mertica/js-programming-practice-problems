const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let longest_no_vowels_word;

  for (const words of wordsByLine) {
    if (!longest_no_vowels_word) {
      longest_no_vowels_word = words;
    }
    if (
      !words.includes("A") &&
      !words.includes("E") &&
      !words.includes("I") &&
      !words.includes("O") &&
      !words.includes("U") &&
      !words.includes("Y")
    ) {
      if (words.length > longest_no_vowels_word.length) {
        longest_no_vowels_word = words;
      }
    }
  }
  console.log("Longest word containing no vowels:", longest_no_vowels_word);
};

readlines();
