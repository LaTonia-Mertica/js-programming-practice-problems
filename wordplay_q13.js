const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let shortest_all5Vowels_word;

  for (const words of wordsByLine) {
    if (
      words.includes("A") &&
      words.includes("E") &&
      words.includes("I") &&
      words.includes("O") &&
      words.includes("U")
    ) {
      if (
        !shortest_all5Vowels_word ||
        words.length < shortest_all5Vowels_word.length
      ) {
        shortest_all5Vowels_word = words;
      }
    }
  }
  console.log(
    "Shortest word containing all five vowels:",
    shortest_all5Vowels_word
  );
};

readlines();
