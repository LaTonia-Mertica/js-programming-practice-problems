const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let no_vowel_or_y_words = [];

  for (const words of wordsByLine) {
    if (
      !words.includes("A") &&
      !words.includes("E") &&
      !words.includes("I") &&
      !words.includes("O") &&
      !words.includes("U") &&
      !words.includes("Y")
    ) {
      no_vowel_or_y_words.push(words);
    }
  }
  {
  }
  console.log("Words containing no vowels not even 'y':", no_vowel_or_y_words);
};

readlines();
