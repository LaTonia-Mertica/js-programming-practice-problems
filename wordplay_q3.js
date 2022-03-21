// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  // set tracker to store words that meet criteria
  let q_not_u_words = [];

  for (const words of wordsByLine) {
    // look for letters q but not letter u
    if (words.includes("Q") && !words.includes("U")) {
      // add to array
      q_not_u_words.push(words);
    }
  }
  console.log("Words containing 'q' not 'u':", q_not_u_words);
};

readlines();
