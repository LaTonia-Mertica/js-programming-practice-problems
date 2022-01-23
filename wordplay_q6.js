const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let b_and_x_under5letter_words = [];

  for (const words of wordsByLine) {
    if (words.includes("B") && words.includes("X") && words.length < 5) {
      b_and_x_under5letter_words.push(words);
    }
  }
  console.log(
    "Words containing 'b' and 'x' that are under five letters long:",
    b_and_x_under5letter_words
  );
};

readlines();
