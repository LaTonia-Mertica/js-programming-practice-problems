// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  // set tracker
  let xyz_words = [];

  for (const words of wordsByLine) {
    // look for letter x, letter y, and letter z
    if (words.includes("X") && words.includes("Y") && words.includes("Z")) {
      // add word to array when criteria met
      xyz_words.push(words);
    }
  }
  console.log("Words containing 'x', 'y', 'z':", xyz_words);
};

readlines();
