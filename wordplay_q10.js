const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let vowels_alphaorder_words = [];

  for (const words of wordsByLine) {
    if (
      words.includes("A") &&
      words.includes("E") &&
      words.includes("I") &&
      words.includes("O") &&
      words.includes("U")
    ) {
      const aPos = words.indexOf("A");
      const ePos = words.indexOf("E");
      const iPos = words.indexOf("I");
      const oPos = words.indexOf("O");
      const uPos = words.indexOf("U");

      if (aPos < ePos && ePos < iPos && iPos < oPos && oPos < uPos) {
        vowels_alphaorder_words.push(words);
      }
    }
  }
  console.log(
    "Words containing vowels in alpha order:",
    vowels_alphaorder_words
  );
};

readlines();
