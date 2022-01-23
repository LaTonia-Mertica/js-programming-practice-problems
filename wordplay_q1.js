const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let uu_words = [];

  for (const words of wordsByLine) {
    if (words.includes("UU")) {
      uu_words.push(words);
    }
  }
  console.log("Words containing 'uu':", uu_words);
};

readlines();
