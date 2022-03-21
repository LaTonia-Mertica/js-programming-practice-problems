// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  // set tracker
  let cat_5letter_words = [];

  for (const words of wordsByLine) {
    // look for 'cat' in each word as loop iterates through list of
    // words ensuring each word is only five letter/characters long
    if (words.includes("CAT") && words.length === 5) {
      // add to array when criteria met
      cat_5letter_words.push(words);
    }
  }
  console.log(
    "Words containing 'cat' that are 5 letters long:",
    cat_5letter_words
  );
};

readlines();
