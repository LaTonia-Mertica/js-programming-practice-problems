// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  // use empty array to set tracker
  let vowels_alphaorder_words = [];

  for (const words of wordsByLine) {
    // check for all vowels
    if (
      words.includes("A") &&
      words.includes("E") &&
      words.includes("I") &&
      words.includes("O") &&
      words.includes("U")
    ) {
      // check position of each vowel in each word to ensure in needed place
      const aPos = words.indexOf("A");
      const ePos = words.indexOf("E");
      const iPos = words.indexOf("I");
      const oPos = words.indexOf("O");
      const uPos = words.indexOf("U");

      // use less than and double and to see if order of vowels is correct
      if (aPos < ePos && ePos < iPos && iPos < oPos && oPos < uPos) {
        // when order of vowels is correct add word to array
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
