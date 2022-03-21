// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let longest_no_vowels_word;

  for (const words of wordsByLine) {
    // loop and while iterate determine if a longest
    // word w/o vowels is already identified
    if (!longest_no_vowels_word) {
      // when not, ie on first iteration/loop, then
      // set value to that of variable words
      longest_no_vowels_word = words;
    }
    // check whether the word does not include specified vowel
    if (
      !words.includes("A") &&
      !words.includes("E") &&
      !words.includes("I") &&
      !words.includes("O") &&
      !words.includes("U") &&
      !words.includes("Y")
    ) {
      // when length of word is greater than that of
      // longest word w/o vowels then assign longest
      // word w/o vowels to value of words
      if (words.length > longest_no_vowels_word.length) {
        longest_no_vowels_word = words;
      }
    }
  }
  console.log("Longest word containing no vowels:", longest_no_vowels_word);
};

readlines();
