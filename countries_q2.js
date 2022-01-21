const fs = require("fs");
const countries = fs.readFileSync("./countries.txt").toString("utf-8");
const countriesByLine = countries.split("\n");

const readlines = () => {
  let begin_end_vowel = [];
  let vowels = ["A", "E", "I", "O", "U", "Y"];

  for (const word of countriesByLine) {
    if (word.charAt(0) === "A") {
      begin_end_vowel.push(word);
    }
  }

  console.log(begin_end_vowel);
};

readlines();
