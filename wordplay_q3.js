const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let q_not_u_words = [];

  for (const words of wordsByLine) {
    if (words.includes("Q") && !words.includes("U")) {
      q_not_u_words.push(words);
    }
  }
  console.log("Words containing 'q' not 'u':", q_not_u_words);
};

readlines();
