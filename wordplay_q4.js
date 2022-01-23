const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let cat_5letter_words = [];

  for (const words of wordsByLine) {
    if (words.includes("CAT") && words.length === 5) {
      cat_5letter_words.push(words);
    }
  }
  console.log(
    "Words containing 'cat' that are 5 letters long:",
    cat_5letter_words
  );
};

readlines();
