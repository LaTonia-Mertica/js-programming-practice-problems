const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let ghtly_words = [];

  for (const words of wordsByLine) {
    const last5letters = words.substring(words.length - 5);
    if (last5letters === "GHTLY") {
      ghtly_words.push(words);
    }
  }
  console.log("Words that end with 'ghtly':", ghtly_words);
};

readlines();
