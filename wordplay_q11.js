// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  // declare counter
  let typeCounter = 0;

  for (const words of wordsByLine) {
    // look for 'type' to be in the word
    if (words.includes("TYPE")) {
      // increment counter when 'type' is found
      typeCounter++;
    }
  }
  console.log("Words containing 'type':", typeCounter);
};

readlines();
