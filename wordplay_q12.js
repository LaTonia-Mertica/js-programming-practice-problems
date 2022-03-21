// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  // track words with sought letters
  let ghtly_words = [];

  for (const words of wordsByLine) {
    // use substring to check last five characters of word
    const last5letters = words.substring(words.length - 5);
    // when the last five characters match what is sought
    if (last5letters === "GHTLY") {
      // add to array
      ghtly_words.push(words);
    }
  }
  console.log("Words that end with 'ghtly':", ghtly_words);
};

readlines();
