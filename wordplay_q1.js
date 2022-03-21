// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  // set tracker
  let uu_words = [];

  for (const words of wordsByLine) {
    // look for double letter u next to each other in word(s)
    if (words.includes("UU")) {
      // add word to array/tracker when criteria met
      uu_words.push(words);
    }
  }
  console.log("Words containing 'uu':", uu_words);
};

readlines();
