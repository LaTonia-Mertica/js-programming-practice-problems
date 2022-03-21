// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const log_y_startandend_words = () => {
  // set empty array as tracker
  let y_startandend_words = [];

  for (const words of wordsByLine) {
    // check whether character/letter at first index
    // is the same as the character/letter at the end
    // of the word, both must be letter y
    if (words.charAt(0) === "Y" && words.charAt(words.length - 1) === "Y") {
      // add to array when word meets criteria
      y_startandend_words.push(words);
    }
  }
  console.log(
    "Words containing 'y' at the start and end:",
    y_startandend_words
  );
};

log_y_startandend_words();
