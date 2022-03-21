// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  // set tracker
  let b_and_x_under5letter_words = [];

  for (const words of wordsByLine) {
    // for loop to iterate checking for letters b and x
    // in each weord and that the word is less than five
    // total characters/letters long
    if (words.includes("B") && words.includes("X") && words.length < 5) {
      // when criteria met, add word to array
      b_and_x_under5letter_words.push(words);
    }
  }
  console.log(
    "Words containing 'b' and 'x' that are under five letters long:",
    b_and_x_under5letter_words
  );
};

readlines();
