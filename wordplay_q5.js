const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let no_e_or_a_15letter_words = [];

  for (const words of wordsByLine) {
    if (words.length >= 15 && !words.includes("E") && !words.includes("A")) {
      no_e_or_a_15letter_words.push(words);
    }
  }
  console.log(
    "Words containing no 'e' or 'a' that are 15 letters long:",
    no_e_or_a_15letter_words
  );
};

readlines();
