const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const log_y_startandend_words = () => {
  let y_startandend_words = [];

  for (const words of wordsByLine) {
    if (words.charAt(0) === "Y" && words.charAt(words.length - 1) === "Y") {
      y_startandend_words.push(words);
    }
  }
  console.log(
    "Words containing 'y' at the start and end:",
    y_startandend_words
  );
};

log_y_startandend_words();
