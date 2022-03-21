// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let shortest_all5Vowels_word;

  for (const words of wordsByLine) {
    // check whether all vowels are in the word
    if (
      words.includes("A") &&
      words.includes("E") &&
      words.includes("I") &&
      words.includes("O") &&
      words.includes("U")
    ) {
      // when all vowels in the word then check
      // whether it is not yet the shortest word
      // or the length of the word is less than
      // shortest all vowels words and assign
      // the shortest to be the value of shortest
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
