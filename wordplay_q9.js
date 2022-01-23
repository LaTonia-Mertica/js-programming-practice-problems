const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let vowels_in_anyorder_words = [];

  for (const words of wordsByLine) {
    if (
      words.includes("A") &&
      words.includes("E") &&
      words.includes("I") &&
      words.includes("O") &&
      words.includes("U")
    ) {
      vowels_in_anyorder_words.push(words);
    }
  }
  console.log(
    "Words containing vowels in any order:",
    vowels_in_anyorder_words
  );
};

readlines();
