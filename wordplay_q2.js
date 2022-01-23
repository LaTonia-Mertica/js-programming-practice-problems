const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let xyz_words = [];

  for (const words of wordsByLine) {
    if (words.includes("X") && words.includes("Y") && words.includes("Z")) {
      xyz_words.push(words);
    }
  }
  console.log("Words containing 'x', 'y', 'z':", xyz_words);
};

readlines();
