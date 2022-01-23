const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let typeCounter = 0;

  for (const words of wordsByLine) {
    if (words.includes("TYPE")) {
      typeCounter++;
    }
  }
  console.log("Words containing 'type':", typeCounter);
};

readlines();
