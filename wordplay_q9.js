const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const printWordsWithAllVowels = () => {
  let vowelsInAnyOrderWords = [];

  for (const words of wordsByLine) {
    if (
      words.includes("A") &&
      words.includes("E") &&
      words.includes("I") &&
      words.includes("O") &&
      words.includes("U")
    ) {
      vowelsInAnyOrderWords.push(words);
    }
  }
  console.log("Words containing vowels in any order:", vowelsInAnyOrderWords);
};

printWordsWithAllVowels();
